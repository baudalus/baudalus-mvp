export class TaskHolder {

    /**
     * Returns all tasks.
     */
    static getTasks() {
        return this.tasks
    }

    /**
     * Adds a new task.
     */
    static addTask(task: { area: string, name: string, duration: string, start: string, end: string }) {
        this.tasks.push(task)
    }

    /**
     * Connections between tasks.
     */
    static connections = {
        1: [2, 15, 16, 42]
    }

    /**
     * All tasks.
     */
    static tasks = [
        {
            "area": "",
            "name": "Baustelleneinrichtung",
            "duration": "123 Tage",
            "start": "Fre 27.11.20",
            "end": "Fre 28.05.21"
        },
        {
            "area": "",
            "name": "Erd- & Entwässerungsarbeiten",
            "duration": "78 Tage",
            "start": "Mon 11.01.21",
            "end": "Fre 30.04.21"
        },
        {
            "area": "A",
            "name": "   Anfüllen FU-Gräben vor GB Montage",
            "duration": "10 Tage",
            "start": "Mon 11.01.21",
            "end": "Fre 22.01.21"
        },
        {
            "area": "A",
            "name": "   Aushub Überfahren, Ausbildung Rampe, Verlegen Leerohre Schranke",
            "duration": "1 Tag",
            "start": "Mon 11.01.21",
            "end": "Mon 11.01.21"
        },
        {
            "area": "A",
            "name": "   Herstellen bis Feinplanum vor GB-Montage",
            "duration": "5 Tage",
            "start": "Mon 25.01.21",
            "end": "Fre 29.01.21"
        },
        {
            "area": "A",
            "name": "   Umfahrung, Planum herstellen vor Gb Montage",
            "duration": "2 Tage",
            "start": "Mon 18.01.21",
            "end": "Die 19.01.21"
        },
        {
            "area": "",
            "name": "   Grundleitung Achse O herstellen",
            "duration": "2 Tage",
            "start": "Mon 22.03.21",
            "end": "Die 23.03.21"
        },
        {
            "area": "",
            "name": "   Grundleitung Achse A herstellen + Anfüllen Achse A",
            "duration": "3 Tage",
            "start": "Mit 24.02.21",
            "end": "Fre 26.02.21"
        },
        {
            "area": "B/C",
            "name": "   Anfüllen Innerhalb PH+ Feinplanum",
            "duration": "5 Tage",
            "start": "Mon 29.03.21",
            "end": "Die 06.04.21"
        },
        {
            "area": "B",
            "name": "   Pflasterarbeiten",
            "duration": "15 Tage",
            "start": "Mon 12.04.21",
            "end": "Fre 30.04.21"
        },
        {
            "area": "",
            "name": "   Pflaster/Schrankenanlage Außenbereich",
            "duration": "3 Tage",
            "start": "Mon 19.04.21",
            "end": "Mit 21.04.21"
        },
        {
            "area": "",
            "name": "Rohbauarbeiten",
            "duration": "74 Tage",
            "start": "Die 01.12.20",
            "end": "Don 18.03.21"
        },
        {
            "area": "",
            "name": "   BE-Einrichtung",
            "duration": "1 Tag",
            "start": "Die 01.12.20",
            "end": "Die 01.12.20"
        },
        {
            "area": "",
            "name": "   Sauberkeitsschichten komplett",
            "duration": "1 Tag",
            "start": "Don 03.12.20",
            "end": "Don 03.12.20"
        },
        {
            "area": "",
            "name": "   Anlieferung Ankerplatten",
            "duration": "1 Tag",
            "start": "Fre 04.12.20",
            "end": "Fre 04.12.20"
        },
        {
            "area": "",
            "name": "   Bewehren/Schalen Betonieren Achse 1 + A",
            "duration": "4 Tage",
            "start": "Fre 04.12.20",
            "end": "Mit 09.12.20"
        },
        {
            "area": "",
            "name": "   Achse H+TH",
            "duration": "9 Tage",
            "start": "Don 10.12.20",
            "end": "Die 22.12.20"
        },
        {
            "area": "",
            "name": "   Achse O",
            "duration": "4 Tage",
            "start": "Mon 04.01.21",
            "end": "Don 07.01.21"
        },
        {
            "area": "",
            "name": "   Überfahrt Achse 27 +1",
            "duration": "4 Tage",
            "start": "Mon 11.01.21",
            "end": "Don 14.01.21"
        },
        {
            "area": "",
            "name": "   Verlegen Ringerder",
            "duration": "1 Tag",
            "start": "Die 12.01.21",
            "end": "Die 12.01.21"
        },
        {
            "area": "ggf. 1BA vorziehen für Anfüllen Erdbau",
            "name": "   Anschluss Ringerder",
            "duration": "1 Tag",
            "start": "Don 18.03.21",
            "end": "Don 18.03.21"
        },
        {
            "area": "Termin noch offen;Qualität gü BH definiert?",
            "name": "   Herstellung Mauerwerk Technikraum",
            "duration": "8 Tage",
            "start": "Mit 17.02.21",
            "end": "Fre 26.02.21"
        },
        {
            "area": "",
            "name": "      Anlieferung Mauerwerk",
            "duration": "1 Tag",
            "start": "Mit 17.02.21",
            "end": "Mit 17.02.21"
        },
        {
            "area": "",
            "name": "      Herstellung Mauerwerk",
            "duration": "5 Tage",
            "start": "Mon 22.02.21",
            "end": "Fre 26.02.21"
        },
        {
            "area": "",
            "name": "PH-Montage",
            "duration": "46 Tage?",
            "start": "Mit 27.01.21",
            "end": "Mit 31.03.21"
        },
        {
            "area": "DetailTerminplan von Mario in Erwartung",
            "name": "   GB-Montage",
            "duration": "46 Tage?",
            "start": "Mit 27.01.21",
            "end": "Mit 31.03.21"
        },
        {
            "area": "",
            "name": "      BE-Einrichung GB-Montage & Montage Stiftbolzenplatten",
            "duration": "2 Tage",
            "start": "Mit 27.01.21",
            "end": "Don 28.01.21"
        },
        {
            "area": "Montage Fassade durch GB-Montage",
            "name": "      Montage Treppenhaus",
            "duration": "10 Tage",
            "start": "Die 02.02.21",
            "end": "Fre 19.03.21"
        },
        {
            "area": "",
            "name": "      Verguss TH spätestens fertig",
            "duration": "1 Tag",
            "start": "Fre 19.03.21",
            "end": "Mon 22.03.21"
        },
        {
            "area": "",
            "name": "      Stahlbau Achse A-0/7-17",
            "duration": "6 Tage",
            "start": "Mon 08.02.21",
            "end": "Mon 15.02.21"
        },
        {
            "area": "",
            "name": "      Erddruckplatten Achse 17+H/7-17 + Träger",
            "duration": "2 Tage",
            "start": "Mon 15.02.21",
            "end": "Die 16.02.21"
        },
        {
            "area": "",
            "name": "      E1+E2 / 17-7 DP",
            "duration": "1 Tag",
            "start": "Die 16.02.21",
            "end": "Die 16.02.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E3-4 /17-7",
            "duration": "1 Tag",
            "start": "Die 16.02.21",
            "end": "Die 16.02.21"
        },
        {
            "area": "",
            "name": "      E3+E4 / 17-7 DP",
            "duration": "1 Tag",
            "start": "Mit 17.02.21",
            "end": "Mit 17.02.21"
        },
        {
            "area": "",
            "name": "      Erddruckplatten Achse A 7-17",
            "duration": "1 Tag",
            "start": "Don 25.02.21",
            "end": "Don 25.02.21"
        },
        {
            "area": "",
            "name": "      Montage UK TH",
            "duration": "3 Tage",
            "start": "Don 25.02.21",
            "end": "Mon 01.03.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E5+6 / 17-7",
            "duration": "2 Tage",
            "start": "Mon 22.02.21",
            "end": "Die 23.02.21"
        },
        {
            "area": "",
            "name": "      E5+E6 /17-12 DP",
            "duration": "1 Tag?",
            "start": "Die 23.02.21",
            "end": "Die 23.02.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E7+8 /17-12 + Rampendach",
            "duration": "1 Tag",
            "start": "Die 23.02.21",
            "end": "Die 23.02.21"
        },
        {
            "area": "",
            "name": "      E7+E8 /17-12 DP",
            "duration": "1 Tag?",
            "start": "Mit 24.02.21",
            "end": "Mit 24.02.21"
        },
        {
            "area": "",
            "name": "      E3+E4 /12-7 DP",
            "duration": "1 Tag?",
            "start": "Mon 01.03.21",
            "end": "Mon 01.03.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E5+6 /12-7",
            "duration": "1 Tag?",
            "start": "Mon 01.03.21",
            "end": "Mon 01.03.21"
        },
        {
            "area": "",
            "name": "      E5+E6 /17-12 DP",
            "duration": "2 Tage",
            "start": "Die 02.03.21",
            "end": "Die 16.03.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E7+8 /12-7",
            "duration": "1 Tag?",
            "start": "Die 02.03.21",
            "end": "Die 02.03.21"
        },
        {
            "area": "",
            "name": "      E7+E8 /17-12 DP",
            "duration": "1 Tag?",
            "start": "Mit 03.03.21",
            "end": "Mit 03.03.21"
        },
        {
            "area": "",
            "name": "      Erddruckplatten Achse A 1-7/1 A-J/H 1-7",
            "duration": "1 Tag?",
            "start": "Don 04.03.21",
            "end": "Don 04.03.21"
        },
        {
            "area": "2.Abschnitt Stahl",
            "name": "      Stahl A-O/7-1",
            "duration": "4 Tage?",
            "start": "Mon 08.03.21",
            "end": "Don 11.03.21"
        },
        {
            "area": "",
            "name": "      E1+E2 /7-1 DP",
            "duration": "1 Tag?",
            "start": "Mon 15.03.21",
            "end": "Mon 15.03.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E3+4/7-1",
            "duration": "1 Tag?",
            "start": "Die 16.03.21",
            "end": "Die 16.03.21"
        },
        {
            "area": "",
            "name": "      E3+E4 /7-1 DP",
            "duration": "2 Tage?",
            "start": "Mit 17.03.21",
            "end": "Don 18.03.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E5+6/7-1",
            "duration": "1 Tag?",
            "start": "Mon 22.03.21",
            "end": "Mon 22.03.21"
        },
        {
            "area": "",
            "name": "      E5+E6 /7-1 DP",
            "duration": "1 Tag?",
            "start": "Die 23.03.21",
            "end": "Die 23.03.21"
        },
        {
            "area": "",
            "name": "      Deckenträger E7+8/7-1 + Rampendach",
            "duration": "1 Tag?",
            "start": "Mit 24.03.21",
            "end": "Mit 24.03.21"
        },
        {
            "area": "GBMontage 25.3 durch",
            "name": "      E7+E8 /7-1 DP",
            "duration": "2 Tage?",
            "start": "Mit 24.03.21",
            "end": "Don 25.03.21"
        },
        {
            "area": "",
            "name": "      Räumung PH +BE; Fertigstellung Verguss",
            "duration": "3 Tage?",
            "start": "Mon 29.03.21",
            "end": "Mit 31.03.21"
        },
        {
            "area": "",
            "name": "   Sützenkonservierung",
            "duration": "17 Tage",
            "start": "Die 23.02.21",
            "end": "Mit 17.03.21"
        },
        {
            "area": "",
            "name": "      1.BA",
            "duration": "8 Tage",
            "start": "Die 23.02.21",
            "end": "Don 04.03.21"
        },
        {
            "area": "",
            "name": "      2.BA",
            "duration": "4 Tage",
            "start": "Fre 12.03.21",
            "end": "Mit 17.03.21"
        },
        {
            "area": "",
            "name": "Kugelstrahler",
            "duration": "2 Tage",
            "start": "Mit 31.03.21",
            "end": "Mon 05.04.21"
        },
        {
            "area": "!Migua eingebaut",
            "name": "Plattenstoßbeschichtung",
            "duration": "15 Tage",
            "start": "Die 06.04.21",
            "end": "Mon 26.04.21"
        },
        {
            "area": "",
            "name": "Ausbaugewerke",
            "duration": "70 Tage?",
            "start": "Don 28.01.21",
            "end": "Fre 07.05.21"
        },
        {
            "area": "",
            "name": "   Lieferung Lichtkuppel",
            "duration": "1 Tag",
            "start": "Mon 08.03.21",
            "end": "Mon 08.03.21"
        },
        {
            "area": "Fassadenelemente erst ab KW14 abrufbar!",
            "name": "   Montage PH-Fassade",
            "duration": "20 Tage",
            "start": "Die 06.04.21",
            "end": "Mon 03.05.21"
        },
        {
            "area": "",
            "name": "   Dachblechverleger Rampendach",
            "duration": "5 Tage",
            "start": "Die 06.04.21",
            "end": "Mon 12.04.21"
        },
        {
            "area": "",
            "name": "   Dacheindichtung TH",
            "duration": "5 Tage",
            "start": "Die 06.04.21",
            "end": "Mon 12.04.21"
        },
        {
            "area": "",
            "name": "   TH Profilbauglas-Fassade",
            "duration": "5 Tage",
            "start": "Mon 29.03.21",
            "end": "Die 06.04.21"
        },
        {
            "area": "",
            "name": "   Türen",
            "duration": "53 Tage",
            "start": "Mit 17.02.21",
            "end": "Die 04.05.21"
        },
        {
            "area": "erfolgt",
            "name": "      Aufmaß Türen TH",
            "duration": "0 Tage",
            "start": "Mit 17.02.21",
            "end": "Mit 17.02.21"
        },
        {
            "area": "für 26.3 lieferung geplant",
            "name": "      Rohmontage",
            "duration": "5 Tage",
            "start": "Mon 12.04.21",
            "end": "Fre 16.04.21"
        },
        {
            "area": "",
            "name": "      Feinmontage",
            "duration": "2 Tage",
            "start": "Mon 03.05.21",
            "end": "Die 04.05.21"
        },
        {
            "area": "",
            "name": "   Maler",
            "duration": "10 Tage",
            "start": "Mon 19.04.21",
            "end": "Fre 30.04.21"
        },
        {
            "area": "",
            "name": "      Türen TH",
            "duration": "4 Tage",
            "start": "Die 27.04.21",
            "end": "Fre 30.04.21"
        },
        {
            "area": "",
            "name": "      Wand Technikraum",
            "duration": "3 Tage",
            "start": "Mon 19.04.21",
            "end": "Mit 21.04.21"
        },
        {
            "area": "",
            "name": "   Elektroinstallation",
            "duration": "68 Tage?",
            "start": "Don 28.01.21",
            "end": "Mit 05.05.21"
        },
        {
            "area": "",
            "name": "      Abruf Elektrokleinteile",
            "duration": "1 Tag",
            "start": "Don 28.01.21",
            "end": "Don 28.01.21"
        },
        {
            "area": "kommt am 26.2",
            "name": "      Kabelzug TH",
            "duration": "1 Tag",
            "start": "Fre 26.02.21",
            "end": "Fre 26.02.21"
        },
        {
            "area": "",
            "name": "      Montage Beleuchtung Parkebenen 1.BA",
            "duration": "1 Tag",
            "start": "Don 18.03.21",
            "end": "Don 18.03.21"
        },
        {
            "area": "",
            "name": "      Installation Verteilung/Kabelzug",
            "duration": "10 Tage",
            "start": "Mon 15.03.21",
            "end": "Fre 26.03.21"
        },
        {
            "area": "Lieferung Originalstrom BH abstimmen",
            "name": "      Inbetriebnahme",
            "duration": "1 Tag",
            "start": "Mon 03.05.21",
            "end": "Mon 03.05.21"
        },
        {
            "area": "",
            "name": "   Tür TH",
            "duration": "1 Tag",
            "start": "Mon 19.04.21",
            "end": "Mon 19.04.21"
        },
        {
            "area": "",
            "name": "   Schlosser",
            "duration": "61 Tage?",
            "start": "Don 04.02.21",
            "end": "Mon 03.05.21"
        },
        {
            "area": "",
            "name": "      TH Geländer",
            "duration": "8 Tage",
            "start": "Don 04.02.21",
            "end": "Mon 15.02.21"
        },
        {
            "area": "",
            "name": "      Restarbeiten, Bleche",
            "duration": "1 Tag?",
            "start": "Mon 03.05.21",
            "end": "Mon 03.05.21"
        },
        {
            "area": "",
            "name": "   PH-Entwässerung",
            "duration": "16 Tage",
            "start": "Die 16.03.21",
            "end": "Don 08.04.21"
        },
        {
            "area": "Material heben in der Woche vom 8.3 ",
            "name": "      Montage 1.BA",
            "duration": "3 Tage",
            "start": "Die 16.03.21",
            "end": "Don 18.03.21"
        },
        {
            "area": "",
            "name": "      Montage 2.BA",
            "duration": "3 Tage",
            "start": "Die 06.04.21",
            "end": "Don 08.04.21"
        },
        {
            "area": "als Vorleistung Anfüllen EDP und Entwässerung",
            "name": "      Kernbohrungen für Entwässerung Achse A",
            "duration": "1 Tag",
            "start": "Die 16.03.21",
            "end": "Die 16.03.21"
        },
        {
            "area": "",
            "name": "   Blitzschutz",
            "duration": "1 Tag",
            "start": "Mon 19.04.21",
            "end": "Mon 19.04.21"
        },
        {
            "area": "",
            "name": "   Abdichtungsarbeiten",
            "duration": "49 Tage",
            "start": "Fre 26.02.21",
            "end": "Fre 07.05.21"
        },
        {
            "area": "",
            "name": "      PU-Abdichtung TH außen",
            "duration": "2 Tage",
            "start": "Mon 15.03.21",
            "end": "Die 16.03.21"
        },
        {
            "area": "",
            "name": "      PU-Abdichtung TH innen",
            "duration": "3 Tage",
            "start": "Mit 05.05.21",
            "end": "Fre 07.05.21"
        },
        {
            "area": "",
            "name": "      PU Abdichtung Erddruckplatten",
            "duration": "2 Tage",
            "start": "Mon 15.03.21",
            "end": "Die 16.03.21"
        },
        {
            "area": "",
            "name": "      Sockelabdichtung TH",
            "duration": "1 Tag",
            "start": "Fre 26.02.21",
            "end": "Fre 26.02.21"
        },
        {
            "area": "",
            "name": "   Miguaprofile",
            "duration": "21 Tage",
            "start": "Die 16.03.21",
            "end": "Don 15.04.21"
        },
        {
            "area": "",
            "name": "      Rohmontage",
            "duration": "1 Tag",
            "start": "Die 16.03.21",
            "end": "Die 16.03.21"
        },
        {
            "area": "",
            "name": "      Einbau Dichtungen",
            "duration": "2 Tage",
            "start": "Mit 14.04.21",
            "end": "Don 15.04.21"
        },
        {
            "area": "",
            "name": "   Schrankenanlage",
            "duration": "2 Tage",
            "start": "Mon 26.04.21",
            "end": "Die 27.04.21"
        },
        {
            "area": "vor Rohbau Technikraum",
            "name": "   Brandschutz Träger Technikraum",
            "duration": "1 Tag",
            "start": "Don 18.02.21",
            "end": "Don 18.02.21"
        },
        {
            "area": "",
            "name": "   Markierungen",
            "duration": "2 Tage",
            "start": "Mon 03.05.21",
            "end": "Die 04.05.21"
        },
        {
            "area": "",
            "name": "   Beschilderung",
            "duration": "2 Tage",
            "start": "Mon 03.05.21",
            "end": "Die 04.05.21"
        },
        {
            "area": "",
            "name": "   Endreinigung",
            "duration": "3 Tage",
            "start": "Mit 05.05.21",
            "end": "Fre 07.05.21"
        },
        {
            "area": "",
            "name": "Intern - GB - Bauleitung",
            "duration": "132 Tage",
            "start": "Die 27.10.20",
            "end": "Fre 07.05.21"
        },
        {
            "area": "",
            "name": "   Vorab-Begehung PL/BL",
            "duration": "0 Tage",
            "start": "Die 27.10.20",
            "end": "Die 27.10.20"
        },
        {
            "area": "abgerufen für 3.12",
            "name": "   Abruf Ankerplatten",
            "duration": "0 Tage",
            "start": "Don 26.11.20",
            "end": "Don 26.11.20"
        },
        {
            "area": "",
            "name": "   Urlaub BL",
            "duration": "5 Tage",
            "start": "Mon 16.11.20",
            "end": "Fre 20.11.20"
        },
        {
            "area": "",
            "name": "   Urlaub BL",
            "duration": "5 Tage",
            "start": "Mit 02.12.20",
            "end": "Die 08.12.20"
        },
        {
            "area": "",
            "name": "   Urlaub BL",
            "duration": "3 Tage",
            "start": "Don 24.12.20",
            "end": "Don 31.12.20"
        },
        {
            "area": "",
            "name": "   Urlaub BL",
            "duration": "5 Tage",
            "start": "Mon 08.03.21",
            "end": "Fre 12.03.21"
        },
        {
            "area": "",
            "name": "   Urlaub BL",
            "duration": "4 Tage",
            "start": "Mon 29.03.21",
            "end": "Don 01.04.21"
        },
        {
            "area": "",
            "name": "   geplante Fertigstellung",
            "duration": "0 Tage",
            "start": "Fre 07.05.21",
            "end": "Fre 07.05.21"
        },
        {
            "area": "",
            "name": "",
            "duration": "",
            "start": "",
            "end": ""
        },
        {
            "area": "",
            "name": "Leistungen - BH",
            "duration": "22 Tage",
            "start": "Die 27.10.20",
            "end": "Don 26.11.20"
        },
        {
            "area": "",
            "name": "   Herrichten Baugrube",
            "duration": "22 Tage",
            "start": "Die 27.10.20",
            "end": "Mit 25.11.20"
        },
        {
            "area": "",
            "name": "   Baufeldübergabe an GB",
            "duration": "0 Tage",
            "start": "Don 26.11.20",
            "end": "Don 26.11.20"
        },
        {
            "area": "",
            "name": "",
            "duration": "",
            "start": "",
            "end": ""
        },
        {
            "area": "",
            "name": "Abnahmen",
            "duration": "1 Tag?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20"
        },
        {
            "area": "",
            "name": "   Konformiät Brandschutz",
            "duration": "1 Tag?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20"
        },
        {
            "area": "",
            "name": "   Bauherren-Abnahme",
            "duration": "1 Tag?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20"
        },
        {
            "area": "",
            "name": "   Behördliche Abnahme",
            "duration": "1 Tag?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20"
        },
        {
            "area": "",
            "name": "   <Neuer Vorgang>",
            "duration": "1 Tag?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20"
        },
        {
            "area": "",
            "name": "",
            "duration": "",
            "start": "",
            "end": ""
        },
        {
            "area": "",
            "name": "Vertragstermine",
            "duration": "175 Tage?",
            "start": "Mon 12.10.20",
            "end": "Fre 25.06.21"
        },
        {
            "area": "",
            "name": "   vert. Baubeginn/Übergabe Baugrube",
            "duration": "0 Tage",
            "start": "Mon 04.01.21",
            "end": "Mon 04.01.21"
        },
        {
            "area": "",
            "name": "   Bauzeitverlängerung",
            "duration": "1 Tag?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20"
        },
        {
            "area": "",
            "name": "   vert. Fertigstellung",
            "duration": "0 Tage",
            "start": "Fre 25.06.21",
            "end": "Fre 25.06.21"
        }
    ]
}