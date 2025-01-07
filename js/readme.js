/**
 * In dieser Datei werden lediglich verschiedene Anmerkungen, Probleme, Ideen und Bugs notiert.
 */

//--------------------------- Fredys Anmerkungen --------------------------

/**
 * Secret Game Tipp: wenn man alle Coins hat, hat man unbegrenzte Muni ^^
 */

/**
 * Char schaut nach links und hat rechts ein Item, wird aber nicht eingesammelt
 * -> liegt an der Zeit der Collisions-Abfrage, offset Werte abgeändert, Tests bisher erfolgreich
 */

/**
 * LP Bar ändert sich nicht
 * -> beim dokumentieren versehentlich Funktion gelöscht (bemerkt durch github und ist wieder drin)
 */

/**
 * LP Anzeige Boss
 * -> hatte mich bereits am Anfang dagegen entschieden, weil der Boss dadurch bedrohlicher wirkte bzw. ich es in anderen Game als neues Feature gesehen habe
 */

/**
 * Level ist zu stark abgeschnitten
 * -> eine unsichtbare Wand fand ich etwas deplatziert und ich wollte, 
 * dass man die Levelgrenzen sieht, aber ich hab nun das gleiche Bild hinzugefügt.
 * Leider keine passenden Bilder als Alternative gefunden 
 * bzw. muss ich selbst erstellen (Parallel bei dem Projekt noch Gimp angefangen zu lernen xD).
 */

/**
 * kann sich manchmal nicht nach oben bewegen
 * -> konnte ich bisher nicht reproduzieren
 */

/**
 * konnte vorbei schwimmen am Boss, dann ist er buggy
 * -> konnte nicht reproduzieren, wie man am Boss lebend vorbei kommt, 
 * aber nun respawnt er wieder an den ursprünglichen Koordinaten
 */

/**
 * Lange Zeit stuck, wenn man getroffen wird
 * -> liegt an der isHurt() Funktion in der Klasse Movement, 
 * da diese von Junus kam, habe ich lediglich die Werte abgepasst
 */

/**
 * Boss hatte eine Art Streifen
-> lag an der Bilddatei, die jetzt bearbeitet wurde
 */

/**
 * E funktioniert nicht
 * -> in der Beschreibung vergessen gedrücktes E + eine Richtung anzugeben
 */

/**
 * Header Style abändern
 * -> mal irgendwas probiert :D
 */

/** GAME IDEE NEW ENEMY
 * Man könnte Bodentruppen von oben regnen lassen (sterben bei Bodenkontakt).
 * Wäre auch cool, wenn diese Aktion erst getriggert wird, wenn der Endboss läuft.
 */

/** GAME OPTIMIERUNG FAKTOR
 * man könnte eine globale Klassenvariable setzen bei Enemies und Player,
 * damit der Faktor bei der Funktion addToMapInParts(..,.., Faktor) in world
 * nicht mehr benötigt wird.
 * So könnte man unterschiedliche Werte bei den Gegner einsetzen, vielleicht
 * auch ein Item, welches den Endboss entschärft/verkleinert.
 */

/** OPTIMIERUNG Animation addToMap
 * addToMapComplete() bzw.
 * addToMapInParts() optimieren und ggf. auslagern
 */
