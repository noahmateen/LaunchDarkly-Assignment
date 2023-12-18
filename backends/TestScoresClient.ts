type TestScoresResponse = {
  exam: number;
  studentId: string;
  score: number;
};

const BASE_URL = 'https://live-test-scores.herokuapp.com';

const paths = {
  scores: '/scores',
};

// export interface TestScoresClientMethods {
//   retrieveScores: Promise<any>
// }

export class TestScoresClient {
  async retrieveScores(id?: number): Promise<any> {
    const url = BASE_URL + paths.scores;

    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }
}
