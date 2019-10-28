
    // alert('projet web ~maquette + intégration~ by arnaud Vandamme')
    /*---------------------------------- CODE JAVASCRIPT SLIDE QUI FONCTIONNE ---------------------------------- */


    function displayPics() {
        //bracelet orange --------------------------------------------------------------------------------------
        var photosOrange = document.getElementById('galerie_mini_orange');
        var liensOrange = photosOrange.getElementsByTagName('a');
        var bigPhotoOrange = document.getElementById('big_pict_orange');
        
        for (var GalerieBraceletOrange = 0; GalerieBraceletOrange < liensOrange.length; ++GalerieBraceletOrange) { 
            liensOrange[GalerieBraceletOrange].onclick = function () {
                bigPhotoOrange.src = this.href; 
                return false;
            };
        }
        //bracelet rose ---------------------------------------------------------------------------------------
        var photosRose = document.getElementById('galerie_mini_rose');
        var liensRose = photosRose.getElementsByTagName('a');
        var bigPhotoRose = document.getElementById('big_pict_rose');

        for (var GalerieBraceletRose = 0; GalerieBraceletRose < liensRose.length; ++GalerieBraceletRose) { 
            liensRose[GalerieBraceletRose].onclick = function () {
                bigPhotoRose.src = this.href; 
                return false;
            };
        }
        //bracelet maron  --------------------------------------------------------------------------------------
        var photosMaron = document.getElementById('galerie_mini_maron');
        var liensMaron = photosMaron.getElementsByTagName('a');
        var bigPhotoMaron = document.getElementById('big_pict_maron');

        for (var GalerieBraceletMaron = 0; GalerieBraceletMaron < liensMaron.length; ++GalerieBraceletMaron) { 
            liensMaron[GalerieBraceletMaron].onclick = function () {
                bigPhotoMaron.src = this.href; 
                return false;
            };
        }
        //bracelet bleu --------------------------------------------------------------------------------------
        var photosBleu = document.getElementById('galerie_mini_bleu');
        var liensBleu = photosBleu.getElementsByTagName('a');
        var bigPhotoBleu = document.getElementById('big_pict_bleu');

        for (var GalerieBraceletBleu = 0; GalerieBraceletBleu < liensBleu.length; ++GalerieBraceletBleu) { 
            liensBleu[GalerieBraceletBleu].onclick = function () {
                bigPhotoBleu.src = this.href; 
                return false;
            };
        }
    //la suite des galeries --------------------------------------------------------------------------------------
    }

    window.onload = displayPics;
