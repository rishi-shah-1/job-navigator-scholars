import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Globe, School, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LANGUAGES = {
  en: {
    title: "Sayreville War Memorial High School",
    address: "Address",
    contact: "Contact",
    phone: "Phone",
    enterToken: "Enter your Mapbox token",
    save: "Save",
    directions: "Get Directions",
    viewInfo: "School Information",
    languageName: "English"
  },
  es: {
    title: "Escuela Secundaria Sayreville War Memorial",
    address: "Dirección",
    contact: "Contacto",
    phone: "Teléfono",
    enterToken: "Ingrese su token de Mapbox",
    save: "Guardar",
    directions: "Obtener Direcciones",
    viewInfo: "Información Escolar",
    languageName: "Español"
  },
  hi: {
    title: "सेरविले वॉर मेमोरियल हाई स्कूल",
    address: "पता",
    contact: "संपर्क",
    phone: "फ़ोन",
    enterToken: "अपना मैपबॉक्स टोकन दर्ज करें",
    save: "सहेजें",
    directions: "दिशा-निर्देश प्राप्त करें",
    viewInfo: "स्कूल की जानकारी",
    languageName: "हिन्दी"
  },
  mr: {
    title: "सेरविले वॉर मेमोरियल हाय स्कूल",
    address: "पत्ता",
    contact: "संपर्क",
    phone: "फोन",
    enterToken: "मॅपबॉक्स टोकन प्रविष्ट करा",
    save: "जतन करा",
    directions: "दिशा मिळवा",
    viewInfo: "शाळेची माहिती",
    languageName: "मराठी"
  },
  de: {
    title: "Sayreville War Memorial High School",
    address: "Adresse",
    contact: "Kontakt",
    phone: "Telefon",
    enterToken: "Geben Sie Ihr Mapbox-Token ein",
    save: "Speichern",
    directions: "Route anzeigen",
    viewInfo: "Schulinformationen",
    languageName: "Deutsch"
  },
  fr: {
    title: "École Secondaire Sayreville War Memorial",
    address: "Adresse",
    contact: "Contact",
    phone: "Téléphone",
    enterToken: "Entrez votre jeton Mapbox",
    save: "Enregistrer",
    directions: "Obtenir l'itinéraire",
    viewInfo: "Informations sur l'école",
    languageName: "Français"
  },
  gu: {
    title: "સેરવિલે વોર મેમોરિયલ હાઈ સ્કૂલ",
    address: "સરનામું",
    contact: "સંપર્ક",
    phone: "ફોન",
    enterToken: "તમારું મેપબોક્સ ટોકન દાખલ કરો",
    save: "સાચવો",
    directions: "દિશા મેળવો",
    viewInfo: "શાળાની માહિતી",
    languageName: "ગુજરાતી"
  },
  it: {
    title: "Scuola Superiore Sayreville War Memorial",
    address: "Indirizzo",
    contact: "Contatto",
    phone: "Telefono",
    enterToken: "Inserisci il tuo token Mapbox",
    save: "Salva",
    directions: "Ottieni indicazioni",
    viewInfo: "Informazioni sulla scuola",
    languageName: "Italiano"
  }
};

type LanguageCode = keyof typeof LANGUAGES;

const SchoolMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState(localStorage.getItem('mapbox-token') || '');
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLang = localStorage.getItem('preferred-language');
    return (savedLang as LanguageCode) || 'en';
  });
  const { toast } = useToast();
  const texts = LANGUAGES[language];

  const handleLanguageChange = (newLang: LanguageCode) => {
    setLanguage(newLang);
    localStorage.setItem('preferred-language', newLang);
    toast({
      title: "Language Changed",
      description: `Language set to ${LANGUAGES[newLang].languageName}`,
      duration: 3000,
    });
    initializeMap(); // Reinitialize map to update language
  };

  const saveToken = () => {
    localStorage.setItem('mapbox-token', token);
    initializeMap();
    toast({
      title: "Success",
      description: "Mapbox token saved successfully",
    });
  };

  const initializeMap = () => {
    if (!mapContainer.current || !token) return;

    if (map.current) map.current.remove();

    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.360384, 40.459911], // Sayreville War Memorial High School
        zoom: 15,
        pitch: 45,
        bearing: -17.6,
      });

      // Add controls
      map.current.addControl(new mapboxgl.NavigationControl());
      map.current.addControl(new mapboxgl.FullscreenControl());

      // Add marker for the school
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h3 class="font-bold">${texts.title}</h3>
            <p>820 Washington Rd, Parlin, NJ 08859</p>
          </div>
        `);

      new mapboxgl.Marker({ color: "#003087" })
        .setLngLat([-74.360384, 40.459911])
        .setPopup(popup)
        .addTo(map.current);

      // Add 3D building layer
      map.current.on('style.load', () => {
        map.current?.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': ['get', 'height'],
            'fill-extrusion-opacity': 0.6
          }
        });
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid Mapbox token. Please check and try again.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    if (token) {
      initializeMap();
    }
  }, [token, language]);

  const getDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=Sayreville+War+Memorial+High+School`);
  };

  return (
    <div className="page-container py-8">
      <Card className="max-w-5xl mx-auto bg-white shadow-lg">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-[#003087] flex items-center gap-2">
              <School className="h-6 w-6" />
              {texts.title}
            </CardTitle>
            <Select value={language} onValueChange={(value: LanguageCode) => handleLanguageChange(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {LANGUAGES[language].languageName}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="mr">मराठी</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="gu">ગુજરાતી</SelectItem>
                <SelectItem value="it">Italiano</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {!token && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder={texts.enterToken}
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <Button onClick={saveToken}>{texts.save}</Button>
              </div>
              <p className="text-sm text-gray-600">
                Get your token at <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>
              </p>
            </div>
          )}

          <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-6 shadow-lg">
            <div ref={mapContainer} className="absolute inset-0" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {texts.address}
              </h3>
              <p className="text-gray-600">820 Washington Rd, Parlin, NJ 08859</p>
              <Button onClick={getDirections} className="w-full">
                {texts.directions}
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Info className="h-4 w-4" />
                {texts.contact}
              </h3>
              <p className="text-gray-600">
                {texts.phone}: (732) 525-5200
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.open('https://www.sayrevillek12.net/', '_blank')}>
                {texts.viewInfo}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolMap;
