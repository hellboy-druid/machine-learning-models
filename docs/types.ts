// types.ts

export type ModelType = 'linearRegression' | 'logisticRegression' | 'decisionTree' | 'randomForest' | 'neuralNetwork';

export interface IModel {
  type: ModelType;
  inputData: { [key: string]: any }[];
  outputPath: string;
  hyperparameters: { [key: string]: any };
}

export interface ILinearRegressionModel extends IModel {
  type: 'linearRegression';
  inputData: { [key: string]: number }[];
  outputPath: string;
  hyperparameters: {
    learningRate: number;
    epochs: number;
  };
}

export interface ILogisticRegressionModel extends IModel {
  type: 'logisticRegression';
  inputData: { [key: string]: number }[];
  outputPath: string;
  hyperparameters: {
    learningRate: number;
    epochs: number;
  };
}

export interface IDecisionTreeModel extends IModel {
  type: 'decisionTree';
  inputData: { [key: string]: number }[];
  outputPath: string;
  hyperparameters: {
    maxDepth: number;
    minSamplesSplit: number;
  };
}

export interface IRandomForestModel extends IModel {
  type: 'randomForest';
  inputData: { [key: string]: number }[];
  outputPath: string;
  hyperparameters: {
    n_estimators: number;
    maxDepth: number;
  };
}

export interface INeuralNetworkModel extends IModel {
  type: 'neuralNetwork';
  inputData: { [key: string]: number }[];
  outputPath: string;
  hyperparameters: {
    hiddenLayers: number[];
    learningRate: number;
    epochs: number;
  };
}