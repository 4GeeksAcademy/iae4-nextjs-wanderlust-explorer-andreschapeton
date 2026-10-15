const imageOverrides: Record<string, string> = {
  '5': 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
  '17': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
  '21': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  '24': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  '25': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
  '35': 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
  '40': 'https://images.unsplash.com/photo-1508615039623-a25605d2b022',
  '48': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
  '50': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
  '51': 'https://images.unsplash.com/photo-1508615039623-a25605d2b022',
  '58': 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
  '66': 'https://images.unsplash.com/photo-1508615039623-a25605d2b022',
  '70': 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
  '75': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
  '81': 'https://images.unsplash.com/photo-1531058020387-3be344556be6',
  '84': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  '85': 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
  '89': 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  '90': 'https://images.unsplash.com/photo-1508615039623-a25605d2b022',
  '92': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
  '95': 'https://images.unsplash.com/photo-1531058020387-3be344556be6',
};

const unavailablePhotoIds = new Set([
  'photo-1495465542193-496884faf32d',
  'photo-1587595431973-160bebaebf67',
  'photo-1544161515-81205f8abedf',
  'photo-1576506295286-26b59f53ea5f',
  'photo-1551632786-de41ec2cc227',
  'photo-1510812431401-41d2cab2707d',
  'photo-1514632046811-853222365534',
  'photo-1531956122444-e83fa49b4f03',
  'photo-1552820728-8ac41f1ce891',
  'photo-1504681869696-d977211a0f1d',
  'photo-1497494661470-be1a9e13b022',
  'photo-1444080748397-f442aa95c3e5',
]);

const fallbackByCategory = {
  Adventure: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
  Culture: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
  Food: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  Wellness: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
  Nature: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
};

const thematicImages: [RegExp, string][] = [
  [/safari|mandriles|osos polares/i, 'https://images.unsplash.com/photo-1472396961693-142e6e269027'],
  [/ballenas|buceo|snorkel|vela|crucero|kayak|windsurf|catamar[aá]n/i, 'https://images.unsplash.com/photo-1559827260-dc66d52bef19'],
  [/astron[oó]m|aurora|expedici[oó]n polar/i, 'https://images.unsplash.com/photo-1519681393784-d120267933ba'],
  [/vino|champagne|sommelier|trufa|gastron|cocina|sushi|paella|fermentaci[oó]n|t[eé] /i, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'],
  [/yoga|meditaci[oó]n|mindfulness|detox|ayuno|respiraci[oó]n|t[aá]ntra|ayurveda/i, 'https://images.unsplash.com/photo-1506126613408-eca07ce68773'],
  [/spa|termas|termal|masaje|aromaterapia|reflexolog[ií]a|tratamiento facial|bienestar/i, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef'],
  [/baile|danza|lucha libre|circo|festival|karate/i, 'https://images.unsplash.com/photo-1501504905252-473c47e087f8'],
  [/templo|patrimonio|historia|arquitectura|museo|arte|catedral|castillo|inmersi[oó]n ling[uü][ií]stica|literatura|feng shui|moda|diseño|cer[aá]mica|forja|[oó]pera/i, 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da'],
  [/senderismo|trekking|montañ|caminata|esqu[ií]|canyoneering|rafting|ciclismo|escalada|espeleolog[ií]a|cueva|andinismo|glacia|sandboard/i, 'https://images.unsplash.com/photo-1551632811-561732d1e306'],
  [/bosque|selva|volc[aá]n/i, 'https://images.unsplash.com/photo-1511497584788-876760111969'],
];

export function getExperienceImageUrl(id: string, title: string, category: keyof typeof fallbackByCategory, originalUrl: string) {
  const original = new URL(originalUrl);
  const sourcePhotoId = original.pathname.split('/').pop() ?? '';
  const thematicImage = thematicImages.find(([pattern]) => pattern.test(title))?.[1];
  const selectedUrl = imageOverrides[id] ?? (
    unavailablePhotoIds.has(sourcePhotoId)
      ? thematicImage ?? fallbackByCategory[category]
      : originalUrl
  );
  const imageUrl = new URL(selectedUrl);
  imageUrl.searchParams.set('auto', 'format');
  imageUrl.searchParams.set('fit', 'crop');
  imageUrl.searchParams.set('w', '1600');
  imageUrl.searchParams.set('q', '80');
  return imageUrl.toString();
}