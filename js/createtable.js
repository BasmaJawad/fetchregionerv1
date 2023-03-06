console.log("vi er i create table")

const pbCreateTable = document.getElementById("pbCreateTable")
const tblKommune = document.getElementById("tblKommune")

function createTable(kommune) {
    console.log(kommune.navn)
}

function actionCreateTable() {
    lstKommuner.forEach(createTable)
}

pbCreateTable.addEventListener('click', actionCreateTable)

