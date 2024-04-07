const reaction = document.querySelector('.reaction')
const memory = document.querySelector('.memory')
const verbal = document.querySelector('.verbal')
const visual = document.querySelector('.visual')
const cardScore = document.querySelector('.card__score')
fetch('../../data.json')
	.then(response => response.json())
	.then(data => {
		reaction.textContent = data[0].score
		memory.textContent = data[1].score
		verbal.textContent = data[2].score
		visual.textContent = data[3].score

		cardScore.textContent = Math.round((data[0].score + data[1].score + data[2].score + data[3].score) / 4)
	})
	.catch(error => {
		console.error('Wystąpił błąd podczas pobierania danych:', error)
	})
