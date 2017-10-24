import {Injectable} from '@angular/core';
import {EvaluationDiagram} from '../model/evaluation-diagram';
import {EvaluationDiagramLine} from '../model/evaluation-diagram-line';
import {DiagramResult} from '../model/diagram-result';

@Injectable()
export class EvaluationService {
  private diagram1MostLike: EvaluationDiagram = new EvaluationDiagram(false);
  private diagram2LeastLike: EvaluationDiagram = new EvaluationDiagram(true);
  private diagram3Compete: EvaluationDiagram = new EvaluationDiagram(false);

  constructor() {
    this.diagram1MostLike.add(new EvaluationDiagramLine(1, 0, 0, 0, 0));
    this.diagram1MostLike.add(new EvaluationDiagramLine(2, 1, null, null, 3));
    this.diagram1MostLike.add(new EvaluationDiagramLine(3, null, null, 1, 4));
    this.diagram1MostLike.add(new EvaluationDiagramLine(4, null, null, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(5, 2, 1, null, 5));
    this.diagram1MostLike.add(new EvaluationDiagramLine(6, null, null, 2, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(7, null, null, null, 6));
    this.diagram1MostLike.add(new EvaluationDiagramLine(8, null, 2, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(9, 3, null, null, 7));
    this.diagram1MostLike.add(new EvaluationDiagramLine(10, null, null, 3, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(11, null, null, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(12, 4, 3, null, 8));
    this.diagram1MostLike.add(new EvaluationDiagramLine(13, null, null, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(14, null, null, 4, 9));
    this.diagram1MostLike.add(new EvaluationDiagramLine(15, 5, null, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(16, null, 4, null, 10));
    this.diagram1MostLike.add(new EvaluationDiagramLine(17, 5, null, 5, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(18, null, null, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(19, null, 5, null, 11));
    this.diagram1MostLike.add(new EvaluationDiagramLine(20, 7, null, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(21, null, 6, null, 12));
    this.diagram1MostLike.add(new EvaluationDiagramLine(22, 8, null, 7, 13));
    this.diagram1MostLike.add(new EvaluationDiagramLine(23, 9, 7, null, null));
    this.diagram1MostLike.add(new EvaluationDiagramLine(24, 10, 8, 8, 14));
    this.diagram1MostLike.add(new EvaluationDiagramLine(25, 11, 9, 9, 15));
    this.diagram1MostLike.add(new EvaluationDiagramLine(26, 12, 10, 10, 16));
    this.diagram1MostLike.add(new EvaluationDiagramLine(27, 13, 11, 12, 17));
    this.diagram1MostLike.add(new EvaluationDiagramLine(28, 25, 24, 25, 25));

    this.diagram2LeastLike.add(new EvaluationDiagramLine(1, 25, 25, 25, 25));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(2, 16, 13, 14, 11));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(3, 15, 12, 13, 9));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(4, 14, 11, 12, 8));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(5, 13, null, null, 7));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(6, 12, 10, 11, 6));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(7, null, null, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(8, 11, 9, 10, 5));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(9, 10, null, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(10, null, null, 9, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(11, null, 8, null, 4));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(12, 9, null, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(13, null, null, 8, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(14, 8, 7, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(15, null, null, null, 3));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(16, null, null, 7, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(17, 7, 6, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(18, null, null, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(19, 6, null, 6, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(20, null, null, null, 2));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(21, 5, 5, 5, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(22, null, null, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(23, null, 4, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(24, 4, null, 4, 1));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(25, null, null, null, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(26, 3, 3, 3, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(27, 2, 2, 2, null));
    this.diagram2LeastLike.add(new EvaluationDiagramLine(28, 0, 0, 0, 0));

    this.diagram3Compete.add(new EvaluationDiagramLine(1, -25, -25, -25, -25));
    this.diagram3Compete.add(new EvaluationDiagramLine(2, -13, -11, -11, -5));
    this.diagram3Compete.add(new EvaluationDiagramLine(3, -11, -9, -10, -3));
    this.diagram3Compete.add(new EvaluationDiagramLine(4, -10, null, -9, -1));
    this.diagram3Compete.add(new EvaluationDiagramLine(5, -9, -8, null, 0));
    this.diagram3Compete.add(new EvaluationDiagramLine(6, -8, -7, -8, 1));
    this.diagram3Compete.add(new EvaluationDiagramLine(7, null, null, -7, 2));
    this.diagram3Compete.add(new EvaluationDiagramLine(8, -7, -6, -6, null));
    this.diagram3Compete.add(new EvaluationDiagramLine(9, -6, null, null, 3));
    this.diagram3Compete.add(new EvaluationDiagramLine(10, -5, -5, -5, 4));
    this.diagram3Compete.add(new EvaluationDiagramLine(11, null, null, null, null));
    this.diagram3Compete.add(new EvaluationDiagramLine(12, -4, -4, -4, 5));
    this.diagram3Compete.add(new EvaluationDiagramLine(13, -3, null, null, 6));
    this.diagram3Compete.add(new EvaluationDiagramLine(14, null, -3, -3, null));
    this.diagram3Compete.add(new EvaluationDiagramLine(15, -2, null, -2, 7));
    this.diagram3Compete.add(new EvaluationDiagramLine(16, null, -2, null, null));
    this.diagram3Compete.add(new EvaluationDiagramLine(17, -1, -1, -1, 8));
    this.diagram3Compete.add(new EvaluationDiagramLine(18, 0, null, null, 9));
    this.diagram3Compete.add(new EvaluationDiagramLine(19, 1, 0, 0, null));
    this.diagram3Compete.add(new EvaluationDiagramLine(20, 2, 1, 1, 10));
    this.diagram3Compete.add(new EvaluationDiagramLine(21, 3, null, 2, null));
    this.diagram3Compete.add(new EvaluationDiagramLine(22, 4, 2, 3, 11));
    this.diagram3Compete.add(new EvaluationDiagramLine(23, 5, 3, 4, 12));
    this.diagram3Compete.add(new EvaluationDiagramLine(24, 6, 4, 5, 13));
    this.diagram3Compete.add(new EvaluationDiagramLine(25, 7, 5, 6, 14));
    this.diagram3Compete.add(new EvaluationDiagramLine(26, 9, 7, 8, 15));
    this.diagram3Compete.add(new EvaluationDiagramLine(27, 11, 9, 10, 17));
    this.diagram3Compete.add(new EvaluationDiagramLine(28, 25, 24, 25, 25));
  }

  evalMostLike(dCount: number, iCount: number, sCount: number, gCount: number): DiagramResult {
    return this.diagram1MostLike.evaluate(dCount, iCount, sCount, gCount);
  }

  evalLeastLike(dCount: number, iCount: number, sCount: number, gCount: number): DiagramResult {
    return this.diagram2LeastLike.evaluate(dCount, iCount, sCount, gCount);
  }

  evalCompete(dCount: number, iCount: number, sCount: number, gCount: number): DiagramResult {
    return this.diagram3Compete.evaluate(dCount, iCount, sCount, gCount);
  }
}
