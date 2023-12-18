import TestScoresClient from "../backends";


export async function getExams({
  id,
}: {
  id: number;
}): Promise<any> {
  const foo = await TestScoresClient.retrieveScores();

  return {};
}
