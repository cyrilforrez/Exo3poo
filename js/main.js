function produits(titre, phrase, description) {
    this.titre = titre;
    this.phrase = phrase;
    this.description = description;
};

function gestion() {
    this.creation = function() {
        var titre = document.getElementById("Titre").value;
        var phrase = document.getElementById("phrase").value;
        var description = document.getElementById("description").value;
        var produit1 = new produits(titre, phrase, description);
        this.afficher(produit1);
    }
    this.afficher = function(produit1) {
        document.getElementById("cards").innerHTML = "<p>Titre:" + produit1.titre + "</p>" + " <p>phrase:" + produit1.phrase + "</p> <p>description:" + produit1.description + "</p>";
        document.getElementById("Titre").value = "";
        document.getElementById("phrase").value = "";
        document.getElementById("description").value = "";
    }
};
var blabla = new gestion();
document.getElementById("envoyer").addEventListener("click", function() { blabla.creation() });