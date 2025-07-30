
export type RootStackParamList = {
  GetStarted: undefined;
   Register: undefined; 
  VerifyCode: { email: string };
  Home: undefined;
  Audio: undefined;
  Payement: undefined;
  DailyDialogues: undefined;
  Grammar: undefined;
  Debates: undefined;
  People: undefined;
  Proverbs: undefined;
  Verbs: undefined;
  AccentTraining: undefined;
  Presentation: undefined;
  Vocabularies: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}