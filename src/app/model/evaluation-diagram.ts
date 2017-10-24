import {EvaluationDiagramLine} from './evaluation-diagram-line';
import {DiagramResult} from './diagram-result';
import {DimesionResult} from './dimesion-result';

export class EvaluationDiagram {
  private lines: EvaluationDiagramLine[] = [];

  constructor(private inverse: boolean) {
  }

  add(line: EvaluationDiagramLine) {
    this.lines.push(line);
  }

  evaluate(dCount: number, iCount: number, sCount: number, gCount: number): DiagramResult {
    const dResult = this.computeDimensionResult(this.computeIntensity(dCount, (line) => line.d));
    const iResult = this.computeDimensionResult(this.computeIntensity(iCount, (line) => line.i));
    const sResult = this.computeDimensionResult(this.computeIntensity(sCount, (line) => line.s));
    const gResult = this.computeDimensionResult(this.computeIntensity(gCount, (line) => line.g));
    return new DiagramResult(dResult, iResult, sResult, gResult);
  }

  /*
    @return intensity beteen 1 and 28
   */
  private computeIntensity(counter: number, value: (line: EvaluationDiagramLine) => number): number {
    counter = this.inverse ? -counter : counter;
    let lowestPositionLessThan: number = null;
    let heighstPositionGreaterThan: number = null;
    for (let i = 0; i < this.lines.length; i++) {
      let definition = value(this.lines[i]);
      if (definition != null) {
        definition = this.inverse ? -definition : definition;
      }
      if (definition != null) {
        if (definition === counter) {
          return i + 1;
        }
        if (definition < counter) {
          lowestPositionLessThan = i;
        }
        if (definition > counter) {
          heighstPositionGreaterThan = i;
          const lastValue = value(this.lines[lowestPositionLessThan]);
          const nextValue = value(this.lines[heighstPositionGreaterThan]);
          return heighstPositionGreaterThan + 1
            - ((heighstPositionGreaterThan - lowestPositionLessThan) / (nextValue - lastValue) )
            * (nextValue - counter);
        }
      }
    }
  }

  private computeDimensionResult(intensity: number): DimesionResult {
    return new DimesionResult(intensity, Math.floor((intensity - 1) / 4 + 1));
  }
}
