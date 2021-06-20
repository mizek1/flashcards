import { useEffect, useState } from 'react';
import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { helperShuffleArray } from '../helpers/arrayHelpers';
import { getAllFlashCards as apiGetAllFlashCards } from '../services/apiService';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  useEffect(() => {
    async function getAllCards() {
      try {
        const backEndAllCards = await apiGetAllFlashCards();
        setAllCards(backEndAllCards);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllCards();
  }, []);

  useEffect(() => {
    setStudyCards(allCards.map((card) => ({ ...card, showTitle: true })));
  }, [allCards]);

  function handleShuffle() {
    const shuffledCards = helperShuffleArray(studyCards);
    setStudyCards(shuffledCards);
  }

  function handleShowTitle() {
    const updatedCards = [...studyCards].map((card) => ({
      ...card,
      showTitle: true,
    }));
    setStudyCards(updatedCards);
    setRadioButtonShowTitle(true);
  }

  function handleShowDescription() {
    const updatedCards = [...studyCards].map((card) => ({
      ...card,
      showTitle: false,
    }));
    setStudyCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;
    setStudyCards(updatedCards);
  }

  let mainJSX = (
    <>
      <div className="flex justify-center my-4">
        <Loading />
      </div>
    </>
  );

  if (error) {
    mainJSX = <Error>{error}</Error>;
  }

  if (!loading) {
    mainJSX = (
      <>
        <div className="text-center">
          <Button onButtonClick={handleShuffle}>Embaralhar cards</Button>
          <div className="flex flex-row justify-center space-x-2 mb-2">
            <RadioButton
              name="showInfo"
              id="radioButtonShowTitle"
              checked={radioButtonShowTitle}
              onButtonClick={handleShowTitle}
            >
              Mostrar título
            </RadioButton>
            <RadioButton
              name="showInfo"
              id="radioButtonShowDescription"
              checked={!radioButtonShowTitle}
              onButtonClick={handleShowDescription}
            >
              Mostrar descrição
            </RadioButton>
          </div>
        </div>

        <FlashCards>
          {studyCards.map(({ id, title, description, showTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
                onToggleFlashCard={handleToggleFlashCard}
              ></FlashCard>
            );
          })}
        </FlashCards>
      </>
    );
  }

  return (
    <>
      <Header>Flashcards</Header>
      <Main>{mainJSX}</Main>
    </>
  );
}
