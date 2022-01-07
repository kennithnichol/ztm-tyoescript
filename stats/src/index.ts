import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { Console } from "console";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWinsHtml = new Summary(
	new WinsAnalysis('Man United'),
	new HtmlReport());
manUnitedWinsHtml.buildAndPrintReport(matchReader.matches);

const manUWins = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport());
manUWins.buildAndPrintReport(matchReader.matches);
