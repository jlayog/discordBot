exports.run = (client, message, args) => {
    let chance = Math.floor(Math.random() * 2);
    let coinFlip = (chance === 0) ? "Your coin landed on Heads!" : "Your coin landed on Tails!"
    message.reply({embed: {
        color: 3447003,
        title: "Coin Flip",
        description: `${coinFlip}`
      }}).catch(console.error);
}
  
   