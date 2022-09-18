export interface Task {
    area: string
    name: string
    duration: string
    company: string
    start: string
    end: string
    status: string
}

export class TaskHolder {

    /**
     * Returns all tasks.
     */
    static getTasks() {
        const tasks = this.tasks as Task[]
        let counter = 0;

        tasks.forEach(t => {
            if (counter <= 5)
                t.status = "DONE"
            else if (counter > 5 && counter <= 9)
                t.status = "WARNING"
            else if (counter > 9 && counter <= 11)
                t.status = "PROBLEM"
            else
                t.status = "NONE"
            counter++
        })

        return tasks
    }

    /**
     * Returns all tasks.
     */
    static getConnections(): { [key: string]: number[] } {
        return this.connections
    }

    /**
     * Returns all nodes that connect to the given node.
     *
     * @param id
     */
    static getNodeConnectedBy(id: number) {
        let connectedBy = []

        for (const idx of Object.keys(this.connections)) {
            // @ts-ignore
            if (this.connections[idx].indexOf(id) !== -1) {
                connectedBy.push(idx)
            }
        }

        return connectedBy
    }

    /**
     * Adds a new task.
     */
    static addTask(task: Task) {
        this.tasks.push(task)
    }

    /**
     * Adds a new task.
     */
    static addConnection(id: number, connections: number[]) {
        // @ts-ignore
        this.connections[id] = connections
    }

    /**
     * Returns the used tasks.
     */
    static getUsedTasks() :Task[] {
        const taskList = this.getTasks()
        console.log(taskList)
        const tasks = [taskList[0]]
        // @ts-ignore
        Object.keys(this.connections).forEach(id => tasks.push(taskList[id]))

        return tasks as Task[]
    }

    /**
     * Connections between tasks.
     */
    static connections = {
        1: [2, 15, 16, 42],
        2: [3, 4, 11],
        15: [17, 18, 19],
        16: [34],
        42: [44],
        3: [9],
        4: [5, 6, 7],
        17: [23],
        18: [23],
        19: [20, 21, 22],
        34: [35],

        44: [45],
        5: [8],
        6: [8],
        7: [8],
        9: [10],
        8: [10],
        11: [12],
        10: [12],
        // 12: [END],
        23: [24],
        20: [25],
        21: [25],
        22: [25],
        24: [28],
        25: [28],
        35: [36],
        36: [37],
        45: [46, 47, 48],
        46: [49],
        47: [49],
        48: [49],
        50: [51],
        49: [50],
        37: [50],
    }

    /**
     * All tasks.
     */
    static tasks = [
        {
            "area": "",
            "name": "Baustelleneinrichtung",
            "duration": "123 days",
            "start": "Fre 27.11.20",
            "end": "Fre 28.05.21",
            "company": "Dieters Baustellen GmBH",
        },
        {
            "area": "",
            "name": "Erd- & Entwässerungsarbeiten",
            "duration": "78 days",
            "start": "Mon 11.01.21",
            "end": "Fre 30.04.21",
            "company": "Fast Drainage work GmbH & Co.KG"


        },
        {
            "area": "A",
            "name": "Anfüllen FU-Gräben vor GB Montage",
            "duration": "10 days",
            "start": "Mon 11.01.21",
            "end": "Fre 22.01.21",
            "company": "Meier Montage KGaA"
        },
        {
            "area": "A",
            "name": "Aushub Überfahren, Ausbildung Rampe, Verlegen Leerohre Schranke",
            "duration": "1 day",
            "start": "Mon 11.01.21",
            "end": "Mon 11.01.21",
            "company": "Blitz Aushub GmBH"
        },
        {
            "area": "A",
            "name": "Herstellen bis Feinplanum vor GB-Montage",
            "duration": "5 days",
            "start": "Mon 25.01.21",
            "end": "Fre 29.01.21",
            "company": "Leonardos Feinplanung KG"
        },
        {
            "area": "A",
            "name": "Umfahrung, Planum herstellen vor Gb Montage",
            "duration": "2 days",
            "start": "Mon 18.01.21",
            "end": "Die 19.01.21",
            "company": "Super Duper Architect GmbH"
        },
        {
            "area": "",
            "name": "Grundleitung Achse O herstellen",
            "duration": "2 days",
            "start": "Mon 22.03.21",
            "end": "Die 23.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Grundleitung Achse A herstellen + Anfüllen Achse A",
            "duration": "3 days",
            "start": "Mit 24.02.21",
            "end": "Fre 26.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "B/C",
            "name": "Anfüllen Innerhalb PH+ Feinplanum",
            "duration": "5 days",
            "start": "Mon 29.03.21",
            "end": "Die 06.04.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "B",
            "name": "Pflasterarbeiten",
            "duration": "15 days",
            "start": "Mon 12.04.21",
            "end": "Fre 30.04.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Pflaster/Schrankenanlage Außenbereich",
            "duration": "3 days",
            "start": "Mon 19.04.21",
            "end": "Mit 21.04.21",
            "company": "Baustellensecurity GmbH"
        },
        {
            "area": "",
            "name": "Rohbauarbeiten",
            "duration": "74 days",
            "start": "Die 01.12.20",
            "end": "Don 18.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "BE-Einrichtung",
            "duration": "1 day",
            "start": "Die 01.12.20",
            "end": "Die 01.12.20",
            "company": "Baustellenaufbau GmbH"
        },
        {
            "area": "",
            "name": "Sauberkeitsschichten komplett",
            "duration": "1 day",
            "start": "Don 03.12.20",
            "end": "Don 03.12.20",
            "company": "Sauberwisch AG"
        },
        {
            "area": "",
            "name": "Anlieferung Ankerplatten",
            "duration": "1 day",
            "start": "Fre 04.12.20",
            "end": "Fre 04.12.20",
            "company": "Hendriks Transport KG"
        },
        {
            "area": "",
            "name": "Bewehren/Schalen Betonieren Achse 1 + A",
            "duration": "4 days",
            "start": "Fre 04.12.20",
            "end": "Mit 09.12.20",
            "company": "Moritz Diestel und Söhne KG"
        },
        {
            "area": "",
            "name": "Achse H+TH",
            "duration": "9 days",
            "start": "Don 10.12.20",
            "end": "Die 22.12.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Achse O",
            "duration": "4 days",
            "start": "Mon 04.01.21",
            "end": "Don 07.01.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Überfahrt Achse 27 +1",
            "duration": "4 days",
            "start": "Mon 11.01.21",
            "end": "Don 14.01.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Verlegen Ringerder",
            "duration": "1 day",
            "start": "Die 12.01.21",
            "end": "Die 12.01.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "ggf. 1BA vorziehen für Anfüllen Erdbau",
            "name": "Anschluss Ringerder",
            "duration": "1 day",
            "start": "Don 18.03.21",
            "end": "Don 18.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "Termin noch offen;Qualität gü BH definiert?",
            "name": "Herstellung Mauerwerk Technikraum",
            "duration": "8 days",
            "start": "Mit 17.02.21",
            "end": "Fre 26.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Anlieferung Mauerwerk",
            "duration": "1 day",
            "start": "Mit 17.02.21",
            "end": "Mit 17.02.21",
            "company": "Hendriks Transport KG"
        },
        {
            "area": "",
            "name": "Herstellung Mauerwerk",
            "duration": "5 days",
            "start": "Mon 22.02.21",
            "end": "Fre 26.02.21",
            "company": "Mats Maurer GmbH"
        },
        {
            "area": "",
            "name": "PH-Montage",
            "duration": "46 days?",
            "start": "Mit 27.01.21",
            "end": "Mit 31.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "DetailTerminplan von Mario in Erwartung",
            "name": "GB-Montage",
            "duration": "46 days?",
            "start": "Mit 27.01.21",
            "end": "Mit 31.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "BE-Einrichung GB-Montage & Montage Stiftbolzenplatten",
            "duration": "2 days",
            "start": "Mit 27.01.21",
            "end": "Don 28.01.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "Montage Fassade durch GB-Montage",
            "name": "Montage Treppenhaus",
            "duration": "10 days",
            "start": "Die 02.02.21",
            "end": "Fre 19.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Verguss TH spätestens fertig",
            "duration": "1 day",
            "start": "Fre 19.03.21",
            "end": "Mon 22.03.21",
            "company": "Gustav Guss AG"
        },
        {
            "area": "",
            "name": "Stahlbau Achse A-0/7-17",
            "duration": "6 days",
            "start": "Mon 08.02.21",
            "end": "Mon 15.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Erddruckplatten Achse 17+H/7-17 + Träger",
            "duration": "2 days",
            "start": "Mon 15.02.21",
            "end": "Die 16.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E1+E2 / 17-7 DP",
            "duration": "1 day",
            "start": "Die 16.02.21",
            "end": "Die 16.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E3-4 /17-7",
            "duration": "1 day",
            "start": "Die 16.02.21",
            "end": "Die 16.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E3+E4 / 17-7 DP",
            "duration": "1 day",
            "start": "Mit 17.02.21",
            "end": "Mit 17.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Erddruckplatten Achse A 7-17",
            "duration": "1 day",
            "start": "Don 25.02.21",
            "end": "Don 25.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Montage UK TH",
            "duration": "3 days",
            "start": "Don 25.02.21",
            "end": "Mon 01.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E5+6 / 17-7",
            "duration": "2 days",
            "start": "Mon 22.02.21",
            "end": "Die 23.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E5+E6 /17-12 DP",
            "duration": "1 day?",
            "start": "Die 23.02.21",
            "end": "Die 23.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E7+8 /17-12 + Rampendach",
            "duration": "1 day",
            "start": "Die 23.02.21",
            "end": "Die 23.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E7+E8 /17-12 DP",
            "duration": "1 day?",
            "start": "Mit 24.02.21",
            "end": "Mit 24.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E3+E4 /12-7 DP",
            "duration": "1 day?",
            "start": "Mon 01.03.21",
            "end": "Mon 01.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E5+6 /12-7",
            "duration": "1 day?",
            "start": "Mon 01.03.21",
            "end": "Mon 01.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E5+E6 /17-12 DP",
            "duration": "2 days",
            "start": "Die 02.03.21",
            "end": "Die 16.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E7+8 /12-7",
            "duration": "1 day?",
            "start": "Die 02.03.21",
            "end": "Die 02.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E7+E8 /17-12 DP",
            "duration": "1 day?",
            "start": "Mit 03.03.21",
            "end": "Mit 03.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Erddruckplatten Achse A 1-7/1 A-J/H 1-7",
            "duration": "1 day?",
            "start": "Don 04.03.21",
            "end": "Don 04.03.21",
            "company": "Meier Montage KGaA"
        },
        {
            "area": "2.Abschnitt Stahl",
            "name": "Stahl A-O/7-1",
            "duration": "4 days?",
            "start": "Mon 08.03.21",
            "end": "Don 11.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E1+E2 /7-1 DP",
            "duration": "1 day?",
            "start": "Mon 15.03.21",
            "end": "Mon 15.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E3+4/7-1",
            "duration": "1 day?",
            "start": "Die 16.03.21",
            "end": "Die 16.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "E3+E4 /7-1 DP",
            "duration": "2 days?",
            "start": "Mit 17.03.21",
            "end": "Don 18.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E5+6/7-1",
            "duration": "1 day?",
            "start": "Mon 22.03.21",
            "end": "Mon 22.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E7+8/7-1 + Rampendach",
            "duration": "1 day?",
            "start": "Die 23.03.21",
            "end": "Die 23.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Deckenträger E7+8/7-1 + Rampendach",
            "duration": "1 day?",
            "start": "Mit 24.03.21",
            "end": "Mit 24.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "GBMontage 25.3 durch",
            "name": "E7+E8 /7-1 DP",
            "duration": "2 days?",
            "start": "Mit 24.03.21",
            "end": "Don 25.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Räumung PH +BE; Fertigstellung Verguss",
            "duration": "3 days?",
            "start": "Mon 29.03.21",
            "end": "Mit 31.03.21",
            "company": "Gustav Guss KG"
        },
        {
            "area": "",
            "name": "Sützenkonservierung",
            "duration": "17 days",
            "start": "Die 23.02.21",
            "end": "Mit 17.03.21",
            "company": "Sauberwisch AG"
        },
        {
            "area": "",
            "name": "1.BA",
            "duration": "8 days",
            "start": "Die 23.02.21",
            "end": "Don 04.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "2.BA",
            "duration": "4 days",
            "start": "Fre 12.03.21",
            "end": "Mit 17.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Kugelstrahler",
            "duration": "2 days",
            "start": "Mit 31.03.21",
            "end": "Mon 05.04.21",
            "company": "Kugels Strahler GmbH"
        },
        {
            "area": "!Migua eingebaut",
            "name": "Plattenstoßbeschichtung",
            "duration": "15 days",
            "start": "Die 06.04.21",
            "end": "Mon 26.04.21",
            "company": "Sauberwisch AG"
        },
        {
            "area": "",
            "name": "Ausbaugewerke",
            "duration": "70 days?",
            "start": "Don 28.01.21",
            "end": "Fre 07.05.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Lieferung Lichtkuppel",
            "duration": "1 day",
            "start": "Mon 08.03.21",
            "end": "Mon 08.03.21",
            "company": "Meiers Transport AG"
        },
        {
            "area": "Fassadenelemente erst ab KW14 abrufbar!",
            "name": "Montage PH-Fassade",
            "duration": "20 days",
            "start": "Die 06.04.21",
            "end": "Mon 03.05.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Dachblechverleger Rampendach",
            "duration": "5 days",
            "start": "Die 06.04.21",
            "end": "Mon 12.04.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Dacheindichtung TH",
            "duration": "5 days",
            "start": "Die 06.04.21",
            "end": "Mon 12.04.21",
            "company": "Dieter Dicht AG"
        },
        {
            "area": "",
            "name": "TH Profilbauglas-Fassade",
            "duration": "5 days",
            "start": "Mon 29.03.21",
            "end": "Die 06.04.21",
            "company": "Joachims Fassadenbau KG"
        },
        {
            "area": "",
            "name": "Türen",
            "duration": "53 days",
            "start": "Mit 17.02.21",
            "end": "Die 04.05.21",
            "company": "Schüco International KG"
        },
        {
            "area": "erfolgt",
            "name": "Aufmaß Türen TH",
            "duration": "0 days",
            "start": "Mit 17.02.21",
            "end": "Mit 17.02.21",
            "company": "Schüco International KG"
        },
        {
            "area": "für 26.3 lieferung geplant",
            "name": "Rohmontage",
            "duration": "5 days",
            "start": "Mon 12.04.21",
            "end": "Fre 16.04.21",
            "company": "Björns Lieferservice KG"
        },
        {
            "area": "",
            "name": "Feinmontage",
            "duration": "2 days",
            "start": "Mon 03.05.21",
            "end": "Die 04.05.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Maler",
            "duration": "10 days",
            "start": "Mon 19.04.21",
            "end": "Fre 30.04.21",
            "company": "Alfred Maler KG"
        },
        {
            "area": "",
            "name": "Türen TH",
            "duration": "4 days",
            "start": "Die 27.04.21",
            "end": "Fre 30.04.21",
            "company": "Schüco International KG"
        },
        {
            "area": "",
            "name": "Wand Technikraum",
            "duration": "3 days",
            "start": "Mon 19.04.21",
            "end": "Mit 21.04.21",
            "company": "Schüco International KG"
        },
        {
            "area": "",
            "name": "Elektroinstallation",
            "duration": "68 days?",
            "start": "Don 28.01.21",
            "end": "Mit 05.05.21",
            "company": "Mokelke Installations GmbH "
        },
        {
            "area": "",
            "name": "Abruf Elektrokleinteile",
            "duration": "1 day",
            "start": "Don 28.01.21",
            "end": "Don 28.01.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "kommt am 26.2",
            "name": "Kabelzug TH",
            "duration": "1 day",
            "start": "Fre 26.02.21",
            "end": "Fre 26.02.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "",
            "name": "Montage Beleuchtung Parkebenen 1.BA",
            "duration": "1 day",
            "start": "Don 18.03.21",
            "end": "Don 18.03.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "",
            "name": "Installation Verteilung/Kabelzug",
            "duration": "10 days",
            "start": "Mon 15.03.21",
            "end": "Fre 26.03.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "Lieferung Originalstrom BH abstimmen",
            "name": "Inbetriebnahme",
            "duration": "1 day",
            "start": "Mon 03.05.21",
            "end": "Mon 03.05.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Tür TH",
            "duration": "1 day",
            "start": "Mon 19.04.21",
            "end": "Mon 19.04.21",
            "company": "Schüco International KG"
        },
        {
            "area": "",
            "name": "Schlosser",
            "duration": "61 days?",
            "start": "Don 04.02.21",
            "end": "Mon 03.05.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "",
            "name": "TH Geländer",
            "duration": "8 days",
            "start": "Don 04.02.21",
            "end": "Mon 15.02.21",
            "company": "Asendorfs Geländer KG"
        },
        {
            "area": "",
            "name": "Restarbeiten, Bleche",
            "duration": "1 day?",
            "start": "Mon 03.05.21",
            "end": "Mon 03.05.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "",
            "name": "PH-Entwässerung",
            "duration": "16 days",
            "start": "Die 16.03.21",
            "end": "Don 08.04.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "Material heben in der Woche vom 8.3 ",
            "name": "Montage 1.BA",
            "duration": "3 days",
            "start": "Die 16.03.21",
            "end": "Don 18.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Montage 2.BA",
            "duration": "3 days",
            "start": "Die 06.04.21",
            "end": "Don 08.04.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "als Vorleistung Anfüllen EDP und Entwässerung",
            "name": "Kernbohrungen für Entwässerung Achse A",
            "duration": "1 day",
            "start": "Die 16.03.21",
            "end": "Die 16.03.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "",
            "name": "Blitzschutz",
            "duration": "1 day",
            "start": "Mon 19.04.21",
            "end": "Mon 19.04.21",
            "company": "Blitzfrei AG"
        },
        {
            "area": "",
            "name": "Abdichtungsarbeiten",
            "duration": "49 days",
            "start": "Fre 26.02.21",
            "end": "Fre 07.05.21",
            "company": "Mokelke Installations GmbH"
        },
        {
            "area": "",
            "name": "PU-Abdichtung TH außen",
            "duration": "2 days",
            "start": "Mon 15.03.21",
            "end": "Die 16.03.21",
            "company": "Dieter Dicht und Söhne KGaA"
        },
        {
            "area": "",
            "name": "PU-Abdichtung TH innen",
            "duration": "3 days",
            "start": "Mit 05.05.21",
            "end": "Fre 07.05.21",
            "company": ""
        },
        {
            "area": "",
            "name": "PU Abdichtung Erddruckplatten",
            "duration": "2 days",
            "start": "Mon 15.03.21",
            "end": "Die 16.03.21",
            "company": "Dieter Dicht und Söhne KGaA"
        },
        {
            "area": "",
            "name": "Sockelabdichtung TH",
            "duration": "1 day",
            "start": "Fre 26.02.21",
            "end": "Fre 26.02.21",
            "company": "Dieter Dicht und Söhne KGaA"
        },
        {
            "area": "",
            "name": "Miguaprofile",
            "duration": "21 days",
            "start": "Die 16.03.21",
            "end": "Don 15.04.21",
            "company": "Dieter Dicht und Söhne KGaA"
        },
        {
            "area": "",
            "name": "Rohmontage",
            "duration": "1 day",
            "start": "Die 16.03.21",
            "end": "Die 16.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Einbau Dichtungen",
            "duration": "2 days",
            "start": "Mit 14.04.21",
            "end": "Don 15.04.21",
            "company": "Dieter Dicht und Söhne KGaA"
        },
        {
            "area": "",
            "name": "Schrankenanlage",
            "duration": "2 days",
            "start": "Mon 26.04.21",
            "end": "Die 27.04.21",
            "company": "Erich Schranker AG"
        },
        {
            "area": "vor Rohbau Technikraum",
            "name": "Brandschutz Träger Technikraum",
            "duration": "1 day",
            "start": "Don 18.02.21",
            "end": "Don 18.02.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Markierungen",
            "duration": "2 days",
            "start": "Mon 03.05.21",
            "end": "Die 04.05.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Beschilderung",
            "duration": "2 days",
            "start": "Mon 03.05.21",
            "end": "Die 04.05.21",
            "company": "Leons Schilder KG"
        },
        {
            "area": "",
            "name": "Endreinigung",
            "duration": "3 days",
            "start": "Mit 05.05.21",
            "end": "Fre 07.05.21",
            "company": "Sauberwisch KG"
        },
        {
            "area": "",
            "name": "Intern - GB - Bauleitung",
            "duration": "132 days",
            "start": "Die 27.10.20",
            "end": "Fre 07.05.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Vorab-Begehung PL/BL",
            "duration": "0 days",
            "start": "Die 27.10.20",
            "end": "Die 27.10.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "abgerufen für 3.12",
            "name": "Abruf Ankerplatten",
            "duration": "0 days",
            "start": "Don 26.11.20",
            "end": "Don 26.11.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Urlaub BL",
            "duration": "5 days",
            "start": "Mon 16.11.20",
            "end": "Fre 20.11.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Urlaub BL",
            "duration": "5 days",
            "start": "Mit 02.12.20",
            "end": "Die 08.12.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Urlaub BL",
            "duration": "3 days",
            "start": "Don 24.12.20",
            "end": "Don 31.12.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Urlaub BL",
            "duration": "5 days",
            "start": "Mon 08.03.21",
            "end": "Fre 12.03.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Urlaub BL",
            "duration": "4 days",
            "start": "Mon 29.03.21",
            "end": "Don 01.04.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "geplante Fertigstellung",
            "duration": "0 days",
            "start": "Fre 07.05.21",
            "end": "Fre 07.05.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "",
            "duration": "",
            "start": "",
            "end": "",
            "company": ""
        },
        {
            "area": "",
            "name": "Leistungen - BH",
            "duration": "22 days",
            "start": "Die 27.10.20",
            "end": "Don 26.11.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Herrichten Baugrube",
            "duration": "22 days",
            "start": "Die 27.10.20",
            "end": "Mit 25.11.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Baufeldübergabe an GB",
            "duration": "0 days",
            "start": "Don 26.11.20",
            "end": "Don 26.11.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "",
            "duration": "",
            "start": "",
            "end": "",
            "company": ""
        },
        {
            "area": "",
            "name": "Abnahmen",
            "duration": "1 day?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Konformiät Brandschutz",
            "duration": "1 day?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Bauherren-Abnahme",
            "duration": "1 day?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20",
            "company": "Founders Foundation gGmbH"
        },
        {
            "area": "",
            "name": "Behördliche Abnahme",
            "duration": "1 day?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20",
            "company": "Bauamt GbR"
        },
        {
            "area": "",
            "name": "<Neuer Vorgang>",
            "duration": "1 day?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "",
            "duration": "",
            "start": "",
            "end": "",
            "company": ""
        },
        {
            "area": "",
            "name": "Vertragstermine",
            "duration": "175 days?",
            "start": "Mon 12.10.20",
            "end": "Fre 25.06.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "vert. Baubeginn/Übergabe Baugrube",
            "duration": "0 days",
            "start": "Mon 04.01.21",
            "end": "Mon 04.01.21",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "Bauzeitverlängerung",
            "duration": "1 day?",
            "start": "Mon 12.10.20",
            "end": "Mon 12.10.20",
            "company": "Goldbeck GmbH"
        },
        {
            "area": "",
            "name": "vert. Fertigstellung",
            "duration": "0 days",
            "start": "Fre 25.06.21",
            "end": "Fre 25.06.21",
            "company": "Goldbeck GmbH"
        }
    ]
}