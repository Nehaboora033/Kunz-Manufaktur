import { Dug, Flower, Heart } from "./icons"
import image1 from '../assets/webp/Image1.webp'
import image2 from '../assets/webp/image2.webp'
import image3 from '../assets/webp/image3.webp'
import image4 from '../assets/webp/image4.webp'
import image5 from '../assets/webp/image5.webp'
import image6 from '../assets/webp/image6.webp'
import image7 from '../assets/webp/image7.webp'

export const Navlinks = [
    { key: 'nav.home', link: '/' },
    { key: 'nav.services', link: '/unsere' },
    { key: 'nav.workshops', link: '/workshops' },
    { key: 'nav.about', link: '/uber' },
    { key: 'nav.contact', link: '/kontakt' }
]


export const CardsData = [
    {
        id: '1',
        icon: Heart,
        key: 'Persönliche Beratung',
        data: 'Haus- oder Bürobesuche, um Ihren Raum, Stil und Ihre Bedürfnisse zu verstehen. Wir erstellen maßgeschneiderte Arrangements, die perfekt zu Ihrer Umgebung passen.',
        buttontext: 'Beratung vereinbaren',
        image: image1,

    },
    {
        id: '2',
        icon: Flower ,
        key: 'Blumen-Abonnement',
        data: 'Regelmäßige Lieferungen frischer, saisonaler Arrangements. Wählen Sie Ihre Größe, Häufigkeit und Stilpräferenzen für ein wirklich personalisiertes Erlebnis.',
        buttontext: 'Ein Abonnement starten',
        image: image2,
    },
    {
        id: '3',
        icon: Dug,
        key: 'Kreative Workshops',
        data: 'Lernen Sie die Kunst des Blumendesigns in unseren praktischen Workshops. Ideal für Anfänger und diejenigen, die ihre Fähigkeiten verfeinern möchten.',
        buttontext: 'Workshop buchen',
        image: image3,
    },
    {
        id: '4',
        key: 'Frühjahrs-Kranz-Workshop',
        data: 'Gestalten Sie einen schönen Frühlingskranz mit frischen saisonalen Blumen und Grünpflanzen. Perfekt für Anfänger!',
        buttontext: 'Buchen',
        date: '15. September 2025',
        time: '14:00 - 16:00 Uhr',
        location: 'Kunz Studio, München',
        customername: 'Max. 8 Teilnehmer',
        image: image4,
    },
    {
        id: '5',
        key: 'Brautstrauß-Masterclass',
        data: 'Lernen Sie professionelle Techniken zur Erstellung atemberaubender Brautsträuße. Fortgeschrittene Arrangierfähigkeiten.',
        buttontext: 'Buchen',
        date: '22. September 2025',
        time: '10:00 - 13:00 Uhr',
        location: 'Kunz Studio, München',
        customername: 'Max. 8 Teilnehmer',
        image: image5,
    },
    {
        id: '6',
        key: 'Gepresste Blumen Kunst',
        data: 'Erstellen Sie wunderschöne gepresste Blumenkunstwerke zum Mitnehmen. Alle Materialien und Rahmen sind enthalten.',
        buttontext: 'Buchen',
        date: '5. Oktober 2025',
        time: '15:00 - 17:00 Uhr',
        location: 'Kunz Studio, München',
        customername: 'Max. 8 Teilnehmer',
        image: image6,
    },
    {
        id: '7',
        key: 'Frühjahrsstrauß-Arrangieren',
        data: 'Lernen Sie, wie man schöne Sträuße mit frischen Frühlingsblumen arrangiert.',
        buttontext: 'Buchen',
        date: '15. Oktober 2025',
        time: '14:00 - 17:00 Uhr',
        location: 'Kunz Studio, München',
        customername: 'Max. 8 Teilnehmer',
        image: image7,
    },

]