{
    class Game {
        constructor() {
            this.imgEasy = [
                "./images/ca2.jpg",
                "./images/ca6.jpg",
                "./images/ca2.jpg",
                "./images/ca1.jpg",
                "./images/ca5.jpg",
                "./images/ca3.jpg",
                "./images/ca4.jpg",
                "./images/ca6.jpg",
                "./images/ca1.jpg",
                "./images/ca4.jpg",
                "./images/ca3.jpg",
                "./images/ca5.jpg",
            ];
            this.imgMedium = [
                "./images/ca1.jpg",
                "./images/ca1.jpg",
                "./images/ca2.jpg",
                "./images/ca2.jpg",
                "./images/ca3.jpg",
                "./images/ca3.jpg",
                "./images/ca4.jpg",
                "./images/ca4.jpg",
                "./images/ca5.jpg",
                "./images/ca5.jpg",
                "./images/ca6.jpg",
                "./images/ca6.jpg",
                "./images/ca7.jpg",
                "./images/ca7.jpg",
                "./images/ca8.jpg",
                "./images/ca8.jpg",
                "./images/ca9.jpg",
                "./images/ca9.jpg"
            ];
            this.imgHard = [
                "./images/ca1.jpg",
                "./images/ca1.jpg",
                "./images/ca2.jpg",
                "./images/ca2.jpg",
                "./images/ca3.jpg",
                "./images/ca3.jpg",
                "./images/ca4.jpg",
                "./images/ca4.jpg",
                "./images/ca5.jpg",
                "./images/ca5.jpg",
                "./images/ca6.jpg",
                "./images/ca6.jpg",
                "./images/ca7.jpg",
                "./images/ca7.jpg",
                "./images/ca8.jpg",
                "./images/ca8.jpg",
                "./images/ca9.jpg",
                "./images/ca9.jpg",
                "./images/ca10.jpg",
                "./images/ca10.jpg",
                "./images/ca11.jpg",
                "./images/ca11.jpg",
                "./images/ca12.jpg",
                "./images/ca12.jpg"
            ];
            this.gameBody = document.querySelector('.game-container');
            this.newGameBtn = document.querySelector('#new-game');
            this.easyBtn = document.querySelector('#easy');
            this.mediumBtn = document.querySelector('#medium');
            this.hardBtn = document.querySelector('#hard');
            this.shuffledImages = [];
            this.shuffle(this.imgEasy);
            this.board = new Board(3, 4, this.gameBody, this.shuffledImages);
            this.newGameBtn.addEventListener('click', () => this.newGame())
            this.currentGameCounter = 0;
            this.bindOptions();
        }

        initListeners() {

            for (let i = 0; i < this.board.cells.length; i++) {
                for (let j = 0; j < this.board.cells[i].length; j++) {

                    console.log(this.board.cells[i][j]);
                    this.board.cells[i][j].addEventListener('click', (e) => { this.onCardClick(e) })
                }
            }
        }

        newGame() {
            this.initBoard(this.board.rows, this.board.columns, this.gameBody, this.board.images);
        }

        onCardClick(e) {

            // if (e.target.innerHTML.trim() === "") {
            //     this.currentGameCounter++;
            //     e.target.innerHTML = this.currentTurn;

            //     if (this.currentTurnCounter >= 5 && this.board.checkWon(this.currentTurn)) {
            //         this.scores[this.currentTurn]++;
            //         this.scoreElement.text(`${this.tic} : ${this.scores[this.tic]} ---------- ${this.tac} : ${this.scores[this.tac]}`)
            //         alert(this.currentTurn + " Won!");
            //         this.initApp();
            //     } else if (this.currentTurnCounter === 9) {
            //         alert("Tie!");
            //         this.initApp();
            //     } else {
            //         this.currentTurn = this.currentTurn === this.tic ? this.tac : this.tic;
            //     }
            // }
        }

        bindOptions() {
            // const easyBtn = document.querySelector('#easy');
            // const mediumBtn = document.querySelector('#medium');
            // const hardBtn = document.querySelector('#hard');

            this.easyBtn.addEventListener('click', () => { this.initBoard(3, 4, this.gameBody, this.imgEasy) });
            this.mediumBtn.addEventListener('click', () => { this.initBoard(3, 6, this.gameBody, this.imgMedium) });
            this.hardBtn.addEventListener('click', () => { this.initBoard(4, 6, this.gameBody, this.imgHard) });
        }

        initBoard(rows, columns, gameBody, images) {
            this.board.clearBoard();
            this.shuffle(images);
            this.board = new Board(rows, columns, gameBody, this.shuffledImages);
        }

        shuffle(array) {
            let newArray = [];
            array.forEach(imgSrc =>
                newArray.splice(Math.floor(Math.random() * array.length), 0, imgSrc)
            );
            this.shuffledImages = newArray;
            console.log(this.shuffledImages);

        }

    }

    class Board {
        constructor(rows, columns, gameBody, images) {
            this.rows = rows;
            this.columns = columns;
            this.gameBody = gameBody;
            this.images = images;
            this.rowGrid = [];
            this.cells = [];
            this.imagesGrid = [];

            let count = -1;
            for (let i = 0; i < this.rows; i++) {
                this.cells.push([]);
                this.imagesGrid.push([]);
                const row = document.createElement('div');
                row.classList.add('row');
                for (let j = 0; j < this.columns; j++) {
                    count++;
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
                    imgBack.src = this.images[count];
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
                this.rowGrid[i] = row;
            }
        }

        checkWon(currentTurn) {
            // return this.checkRows(currentTurn) || this.checkColumns(currentTurn) || this.checkDiagonal(currentTurn);
        }

        // checkRows(currentTurn) {
        //     for (let i = 0; i < this.cells.length; i++) {
        //         if (
        //             this.cells[i][0].innerHTML === currentTurn &&
        //             this.cells[i][1].innerHTML === currentTurn &&
        //             this.cells[i][2].innerHTML === currentTurn
        //         ) {
        //             return true;
        //         }
        //     }
        //     return false;
        // }

        // checkColumns(currentTurn) {
        //     for (let i = 0; i < this.cells.length; i++) {
        //         if (
        //             this.cells[0][i].innerHTML === currentTurn &&
        //             this.cells[1][i].innerHTML === currentTurn &&
        //             this.cells[2][i].innerHTML === currentTurn
        //         ) {
        //             return true;
        //         }
        //     }
        //     return false;
        // }

        // checkDiagonal(currentTurn) {
        //     if (
        //         this.cells[0][0].innerHTML === currentTurn &&
        //         this.cells[1][1].innerHTML === currentTurn &&
        //         this.cells[2][2].innerHTML === currentTurn
        //     ) {
        //         return true;
        //     }
        //     if (
        //         this.cells[0][2].innerHTML === currentTurn &&
        //         this.cells[1][1].innerHTML === currentTurn &&
        //         this.cells[2][0].innerHTML === currentTurn
        //     ) {
        //         return true;
        //     }
        //     return false
        // }

        clearBoard() {
            this.rowGrid.forEach(row => row.remove())
        }
    }

    // const createHtmlSkeleton = new Board(4, 6, document.querySelector('.game-container'), [
    //     "./images/ca1.jpg",
    //     "./images/ca1.jpg",
    //     "./images/ca2.jpg",
    //     "./images/ca2.jpg",
    //     "./images/ca3.jpg",
    //     "./images/ca3.jpg",
    //     "./images/ca4.jpg",
    //     "./images/ca4.jpg",
    //     "./images/ca5.jpg",
    //     "./images/ca5.jpg",
    //     "./images/ca6.jpg",
    //     "./images/ca6.jpg",
    //     "./images/ca7.jpg",
    //     "./images/ca7.jpg",
    //     "./images/ca8.jpg",
    //     "./images/ca8.jpg",
    //     "./images/ca9.jpg",
    //     "./images/ca9.jpg",
    //     "./images/ca10.jpg",
    //     "./images/ca10.jpg",
    //     "./images/ca11.jpg",
    //     "./images/ca11.jpg",
    //     "./images/ca12.jpg",
    //     "./images/ca12.jpg"
    // ]);
    // createHtmlSkeleton.clearBoard();
    const game = new Game();
}