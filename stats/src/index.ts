import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
const summary1 = Summary.winsAnalysisWithConsoleReport('Man United');
const summary2 = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();

summary1.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);