import React, { useEffect, useState } from 'react';

export  const Game=()=> {
	const [loader, setLoader] = useState(false);


	useEffect(()=>{
setLoader(true)
	},1400)

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='flex text-xl items-center'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className=' w-[90vw] relative mb-20'>
						<div className=' text-xl '>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='mb-12'>This is where the question text should go</div>
					</div>
					<div className='w-[90vw] flex justify-between flex-col'>
						<button>Answer 1</button>
						<button>Answer 2</button>
						<button>Answer 3</button>
						<button>Answer 4</button>
					</div>
				</>
			)}
		</div>
	)
}