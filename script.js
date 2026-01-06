console.log("hello world")
let nomEquipement = "Switch Cisco 2960";
let nombrePorts = 24;
let estActif = true;
let adresseIP = "192.168.1.254";
let debit = 1000.5;

console.log("Nom de l'equipement :" + nomEquipement);
console.log("Nombre de ports :" + nombrePorts);
console.log("Statut actif :" + estActif);
console.log("Adresse IP :" + adresseIP);
console.log("Débit :" + debit + " Mbps");

let motDePasse = "cyber2024!"
let longeur = motDePasse.length

console.log("Mot de passe : " + motDePasse)
console.log("Longeur : " + longeur + " caractères")

if (longeur < 6) {
    console.log("Sécurité faible")
    console.log("Recommandation: utiliser au moins 6 caractères")
} else if (longeur < 10) {
    console.log("sécurité moyen")
    console.log("Recommandation: utiliser au moins 10 caractères")
} else {
    console.log("Sécurité forte")
}








console.log("====== Conditions ======")









let Débit = 0
let Vitesse = Débit

console.log("Débit : " + Débit)
console.log("Vitesse : " + Vitesse + " Mbps")

if (Vitesse === 0) {
        console.log("ERROR - Aucune connection détectée")
} else {
    if (Vitesse < 10) {
    console.log("Connection LENTE - Vérifier les câbles")
    } else if (Vitesse < 100) {
    console.log("Connecton CORRECTE - Débit standard")
    } else if (Vitesse < 1000) {
    console.log("Connecton RAPIDE - Bon débit")
    } else if (Vitesse >= 1000) {
    console.log("Connecton TRES RAPIDE - Fibre optique")
    } else if (Vitesse === 0) {
    console.log("ERROR - Aucune connection détectée")
    }
}











console.log("====== Boucle For ======")





let décompte = 10

for (let i = 0; décompte > 0;  i++) {
    console.log("décompte :", décompte)
    décompte --
}


console.log("======TABLEAU======")


let ports = [20, 80, 443, 3306, 8080];
console.log(ports[2])




for (let i = 0; i < ports.length; i++) {
    console.log("Port n° " + ports[i])
}






console.log("====== EXERCICE ======")




let serveurs = ["8.8.8.8", "1.1.1.1", "208.67.222.222", "192.168.1.1", "10.0.0.1"];
let totalserveur = 0


for (let i = 0; i < serveurs.length; i++) {
    console.log("Ping vers " + serveurs[i])
    console.log("Temps de réponse : " + i*15 + "ms")
    totalserveur ++
}

console.log("Total : " + totalserveur ++)