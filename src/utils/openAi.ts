

import { Configuration, OpenAIApi } from 'openai'

class CustomFormData extends FormData {
 getHeaders() {
  return {}
 }
}
const configuration = new Configuration({
 apiKey: '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',
});
export const openai = new OpenAIApi(configuration);

const configurationVoiceToText = new Configuration({
 apiKey: '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',
 formDataCtor: CustomFormData
})

export const openaiVoiceToText = new OpenAIApi(configurationVoiceToText);
