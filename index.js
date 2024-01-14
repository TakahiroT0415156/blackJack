// グローバル変数

// カードの山
let deck = [];
// 自分のカード
let myCard = [];
// 相手のカード
let partnersCard = [];
// 勝敗決定フラグ
let finishFlag = false;

// イベントハンドラの割り当て

// ページ読み込みが完了した時に発火する関数
window.addEventListener("load", loadSite);
function loadSite() {
  // シャッフルをする
  // 自分がカードを引く
  // 相手がカードを引く
  // 画面を更新する
}

// 山札をシャッフルする関数
function shuffleDeck() {
  // 山札の配列をシャッフル関数でぐちゃぐちゃに混ぜる
}

// 「カードを引く」ボタンが押された時に発火する関数
document.querySelector("#ボタンのID").addEventListener("click", pullCard);
function pullCard() {
  // 自分がカードを1枚引く
  if (myCard.length <= 4) {
    // カードを1枚引く
    // カードを引いたらそれを配列の最後に追加する
  }
  // 相手がカードを1枚引く
  // 画面を更新する
}

// 相手がカードを引くかどうか考える関数
function takeCard() {
  if (partnersCard.length <= 4) {
    if (thinkTakeCard()) {
      // カードを引く
      // カードを引いたらそれを配列の最後に追加する
    }
  }
}

function thinkTakeCard() {
  // 相手がカードを引くかどうかを考える
}

// 「勝負する」ボタンが押された時に発火する関数
document.querySelector("#ボタンのID").addEventListener("click", playGame);
function playGame() {
  // 自分と相手のカードの数字を見比べて勝負する
  // 勝敗を決める
  // 勝敗を画面に表示
}

// 「もう1度遊ぶ」ボタンが押された時に発火する関数
document.querySelector("#ボタンのID").addEventListener("click", playAgain);
function playAgain() {
  // 画面を初期化する
}

function loadScreen() {
  // 自分のカードを表示する
  // 相手のカードを表示する
  // カードの合計値を算出する
}
