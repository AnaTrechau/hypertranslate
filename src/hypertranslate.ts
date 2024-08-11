import translate from "@iamtraction/google-translate";
import { LANGUAGES_ENUM } from "./enums/languages";

export async function hypertranslate(
  text: string,
  times: number,
  startingLanguage = "en",
  finalLanguage = null
): Promise<string> {
  let translatedText = { text, from: { language: { iso: startingLanguage } } };
  const languageArray = new Array(times).fill(undefined).map(() => getRandomLanguage());

  if (finalLanguage) {
    languageArray[times - 1] = finalLanguage;
  }

  for (let i = 0; i < times; i++) {
    translatedText = await translate(translatedText.text, {
      from: translatedText.from.language.iso,
      to: languageArray[i],
    });
  }

  return translatedText.text;
}

const getRandomLanguage = () => {
  const index = Math.floor(Math.random() * 104);

  return LANGUAGES_ENUM[index];
};
