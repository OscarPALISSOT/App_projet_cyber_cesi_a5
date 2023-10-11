interface FreezeBeeModel {
    ModelID?: number;
    ModelName: string;
    pUHT: number;
    Gamme: string;
    Description: string;
}

interface Ingredient {
    IngredientID: number;
    IngredientName: string;
    Description: string;
    estcompose: EstCompose[];
}

interface ManufacturingProcess {
    ProcessID: number;
    ProcessName: string;
    Description: string;
    utilise: Utilise[];
    faitpartie: FaitPartie[];
    valide: Valide[];
}

interface ManufacturingStep {
    StepID: number;
    StepName: string;
    Description: string;
    faitpartie: FaitPartie[];
}

interface Test {
    TestID: number;
    TestName: string;
    Description: string;
    valide: Valide[];
}

interface EstCompose {
    IngredientID: number;
    ModelID: number;
    Grammage: number;
    Ingredient: Ingredient;
    FreezeBeeModel: FreezeBeeModel;
}

interface Utilise {
    ModelID: number;
    ProcessID: number;
    FreezeBeeModel: FreezeBeeModel;
    ManufacturingProcess: ManufacturingProcess;
}

interface FaitPartie {
    StepID: number;
    ProcessID: number;
    StepNumber: number;
    ManufacturingStep: ManufacturingStep;
    ManufacturingProcess: ManufacturingProcess;
}

interface Valide {
    ProcessID: number;
    TestID: number;
    ValideOuiNon: boolean;
    ManufacturingProcess: ManufacturingProcess;
    Test: Test;
}


export type { FreezeBeeModel, Ingredient, ManufacturingProcess, ManufacturingStep, Test, EstCompose, Utilise, FaitPartie, Valide };
