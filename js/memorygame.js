{
    class Game {
        constructor() {
            this.param1 = param1;
        }

        someFunc() {

        }

    }

    class Board {
        constructor(rows, columns) {
            this.rows = rows;
            this.columns = columns;
            this.gameBody = document.querySelector('.game-container');
            this.cells = [];
            this.imagesGrid = [];

            for (let i = 0; i < this.rows; i++) {
                this.cells.push([]);
                this.imagesGrid.push([]);
                const row = document.createElement('div');
                row.classList.add('row');
                for (let j = 0; j < this.columns; j++) {
                    const flipCard = document.createElement('div');
                    flipCard.classList.add('flip-card');
                    const flipCardInner = document.createElement('div');
                    flipCardInner.classList.add('flip-card-inner');
                    const flipCardFront = document.createElement('div');
                    flipCardFront.classList.add('flip-card-front');
                    const imgFront = document.createElement('img');
                    imgFront.src = "./images/backcard.jpg";
                    imgFront.alt = "back card";
                    const flipCardBack = document.createElement('div');
                    flipCardBack.classList.add('flip-card-back');
                    const imgBack = document.createElement('img');
                    imgBack.alt = "cute animal card";
                    flipCardFront.appendChild(imgFront);
                    flipCardBack.appendChild(imgBack);
                    flipCardInner.appendChild(flipCardFront);
                    flipCardInner.appendChild(flipCardBack);
                    flipCard.appendChild(flipCardInner);
                    row.appendChild(flipCard);
                    this.cells[i][j] = flipCard;
                    this.imagesGrid[i][j] = imgBack;
                }
                this.gameBody.appendChild(row);
            }
        }


        clearBoard() {}
    }

    const createHtmlSkeleton = new Board(3, 4);
}