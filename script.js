const runner1 = document.getElementById('runner1');
const runner2 = document.getElementById('runner2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const resetBtn = document.getElementById('resetBtn');
const winnerDiv = document.getElementById('winner');
const gameArea = document.getElementById('game-area');

const finishLine = gameArea.offsetWidth - 120; // 80px角色+40px终点线
let pos1 = 0;
let pos2 = 0;
let gameOver = false;

// 排行榜数据
let leaderboard = {
    pig: { name: '小猪', wins: 0 },
    dragon: { name: '小龙', wins: 0 }
};

function moveRunner(runner, player) {
    if (gameOver) return;
    if (player === 1) {
        pos1 += 20;
        if (pos1 > finishLine) pos1 = finishLine;
        runner.style.left = pos1 + 'px';
        if (pos1 >= finishLine) announceWinner(1);
    } else {
        pos2 += 20;
        if (pos2 > finishLine) pos2 = finishLine;
        runner.style.left = pos2 + 'px';
        if (pos2 >= finishLine) announceWinner(2);
    }
}

function announceWinner(player) {
    gameOver = true;
    let name = player === 1 ? '小猪' : '小龙';
    winnerDiv.innerHTML = `<img src="images/trophy.svg" alt="奖杯"> 恭喜${name}获胜！`;
    
    // 更新排行榜
    if (player === 1) {
        leaderboard.pig.wins++;
    } else {
        leaderboard.dragon.wins++;
    }
    updateLeaderboard();
    
    // GA4 游戏胜利事件跟踪
    if (window.trackGameWin) {
        window.trackGameWin(name);
    }
}

function updateLeaderboard() {
    const leaderboardContent = document.getElementById('leaderboard-content');
    
    // 按胜利次数排序
    const sortedPlayers = Object.values(leaderboard).sort((a, b) => b.wins - a.wins);
    
    leaderboardContent.innerHTML = '';
    sortedPlayers.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        item.innerHTML = `
            <span class="rank">${index + 1}</span>
            <span class="player">${player.name}</span>
            <span class="wins">${player.wins}</span>
        `;
        leaderboardContent.appendChild(item);
    });
}

function resetGame() {
    pos1 = 0;
    pos2 = 0;
    runner1.style.left = '0px';
    runner2.style.left = '0px';
    winnerDiv.innerHTML = '';
    gameOver = false;
    
    // GA4 游戏重置事件跟踪
    if (window.trackGameReset) {
        window.trackGameReset();
    }
}

btn1.addEventListener('click', () => moveRunner(runner1, 1));
btn2.addEventListener('click', () => moveRunner(runner2, 2));
resetBtn.addEventListener('click', resetGame);

document.addEventListener('keydown', (e) => {
    if (gameOver) return;
    if (e.key === 'a' || e.key === 'A') moveRunner(runner1, 1);
    if (e.key === 'l' || e.key === 'L') moveRunner(runner2, 2);
});

// 双击胜利区域重置
winnerDiv.addEventListener('dblclick', resetGame);

// 初始化排行榜
updateLeaderboard(); 