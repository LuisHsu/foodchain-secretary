players = {}
reserve = 0

function Player(id){
    this.id = id;
    this.balance = 0;
    this.earn = (amount) => {
        this.balance += amount;
    }
    this.pay = (amount) => {
        this.balance -= amount;
    }
}

function help(){
    console.log("=== Restaurant ID ===")
    console.log("\t Donkey: 1")
    console.log("\t Duck: 2")
    console.log("\t Santa: 3")
    console.log("\t Xango: 4")
    console.log("\t Gluttony: 5")
    console.log("\t Fuji: 6")
    console.log("=== Commands ===")
    console.log("* New player: players[<name>] = new Player(<restaurant_id>)")
    console.log("* Remove player: delete players[<name>]")
    console.log("* List status: status()")
    console.log("* Set reserve: reserve = <amount>")
    console.log("* Earn: players[<name>].earn(<amount>)")
    console.log("* Pay: players[<name>].pay(<amount>)")
    console.log("--- Reserve = player * 50 ---")
}

function status(){
    console.log(players)
    console.log(`Reserve: ${reserve}`)
}

function refresh(){
    for(var i = 1; i <= 6; ++i){
        document.getElementById(`player-${i}`).style.display = 'none';
    }
    var sum_balance = 0;
    for (const [name, player] of Object.entries(players)) {
        document.getElementById(`player-${player.id}`).style.display = 'flex';
        document.getElementById(`name-${player.id}`).innerText = name;
        document.getElementById(`value-${player.id}`).innerText = '$' + `${player.balance}`;
        sum_balance += player.balance;
    }
    document.getElementById("reserve-value").innerText = '$' + `${reserve - sum_balance}`;
}

setInterval(refresh, 500)