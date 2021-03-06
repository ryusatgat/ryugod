/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.gel',
    keywords: [
        'function',
        'if',
        'else',
        'then',
        'return',
        'for',
        'to',
        'in',
        'do',
        'break',
        'while',
        'null',
        'not',
        'or',
        'and',
        'by',
        'until',
        'continue',
        'parameter',
        'exception',
        'bailout',
        'local',
    ],
    builtins: [
        'AskButtons',
        'AskString',
        'Compose',
        'ComposePower',
        'Evaluate',
        'GetCurrentModulo',
        'Identity',
        'IntegerFromBoolean',
        'IsBoolean',
        'IsDefined',
        'IsFunction',
        'IsFunctionOrIdentifier',
        'IsFunctionRef',
        'IsMatrix',
        'IsNull',
        'IsString',
        'IsValue',
        'Parse',
        'SetFunctionFlags',
        'SetHelp',
        'SetHelpAlias',
        'chdir',
        'CurrentTime',
        'display',
        'DisplayVariables',
        'error',
        'exit',
        'false',
        'manual',
        'print',
        'printn',
        'PrintTable',
        'protect',
        'ProtectAll',
        'set',
        'SetElement',
        'SetVElement',
        'string',
        'true',
        'undefine',
        'UndefineAll',
        'unprotect',
        'UserVariables',
        'wait',
        'version',
        'warranty',
        'AbsoluteValue',
        'Chop',
        'ComplexConjugate',
        'Denominator',
        'FractionalPart',
        'Im',
        'IntegerQuotient',
        'IsComplex',
        'IsComplexRational',
        'IsFloat',
        'IsGaussInteger',
        'IsInteger',
        'IsNonNegativeInteger',
        'IsPositiveInteger',
        'IsRational',
        'IsReal',
        'Numerator',
        'Re',
        'Sign',
        'ceil',
        'exp',
        'float',
        'floor',
        'ln',
        'log',
        'log10',
        'log2',
        'max',
        'min',
        'rand',
        'randint',
        'round',
        'sqrt',
        'trunc',
        'Average',
        'GaussDistribution',
        'GaussFunction',
        'Median',
        'RowAverage',
        'RowMedian',
        'RowStandardDeviation',
        'StandardDeviation',
        'ExportPlot',
        'LinePlot',
        'LinePlotClear',
        'LinePlotDrawLine',
        'LinePlotDrawPoints',
        'LinePlotMouseLocation',
        'LinePlotParametric',
        'LinePlotWaitForClick',
        'PlotCanvasFreeze',
        'PlotCanvasThaw',
        'PlotWindowPresent',
        'SlopefieldClearSolutions',
        'SlopefieldDrawSolution',
        'SlopefieldPlot',
        'SurfacePlot',
        'SurfacePlotClear',
        'SurfacePlotData',
        'SurfacePlotDataGrid',
        'SurfacePlotDrawLine',
        'SurfacePlotDrawPoints',
        'VectorfieldClearSolutions',
        'VectorfieldDrawSolution',
        'VectorfieldPlot',
        'acos',
        'acosh',
        'acot',
        'acoth',
        'acsc',
        'acsch',
        'asec',
        'asech',
        'asin',
        'asinh',
        'atan',
        'atanh',
        'atan2',
        'cos',
        'cosh',
        'cot',
        'coth',
        'csc',
        'csch',
        'sec',
        'sech',
        'sin',
        'sinh',
        'tan',
        'tanh',
        'precision',
        'ApplyOverMatrix',
        'ApplyOverMatrix2',
        'ColumnsOf',
        'ComplementSubmatrix',
        'CompoundMatrix',
        'CountZeroColumns',
        'DeleteColumn',
        'DeleteRow',
        'DiagonalOf',
        'DotProduct',
        'ExpandMatrix',
        'HermitianProduct',
        'I',
        'IndexComplement',
        'IsDiagonal',
        'IsIdentity',
        'IsLowerTriangular',
        'IsMatrixInteger',
        'IsMatrixNonnegative',
        'IsMatrixPositive',
        'IsMatrixRational',
        'IsMatrixReal',
        'IsMatrixSquare',
        'IsUpperTriangular',
        'IsValueOnly',
        'IsVector',
        'IsZero',
        'LowerTriangular',
        'MakeDiagonal',
        'MakeVector',
        'MatrixProduct',
        'MatrixSum',
        'MatrixSumSquares',
        'NonzeroColumns',
        'NonzeroElements',
        'OuterProduct',
        'ReverseVector',
        'RowSum',
        'RowSumSquares',
        'RowsOf',
        'SetMatrixSize',
        'ShuffleVector',
        'SortVector',
        'StripZeroColumns',
        'StripZeroRows',
        'Submatrix',
        'SwapRows',
        'UpperTriangular',
        'columns',
        'elements',
        'ones',
        'rows',
        'zeros',
        'adj',
        'cref',
        'det',
        'ref',
        'rref',
        'AuxiliaryUnitMatrix',
        'BilinearForm',
        'BilinearFormFunction',
        'CharacteristicPolynomial',
        'CharacteristicPolynomialFunction',
        'ColumnSpace',
        'CommutationMatrix',
        'CompanionMatrix',
        'ConjugateTranspose',
        'Convolution',
        'ConvolutionVector',
        'CrossProduct',
        'DeterminantalDivisorsInteger',
        'DirectSum',
        'DirectSumMatrixVector',
        'Eigenvalues',
        'Eigenvectors',
        'GramSchmidt',
        'HankelMatrix',
        'HilbertMatrix',
        'Image',
        'InfNorm',
        'InvariantFactorsInteger',
        'InverseHilbertMatrix',
        'IsHermitian',
        'IsInSubspace',
        'IsInvertible',
        'IsInvertibleField',
        'IsNormal',
        'IsPositiveDefinite',
        'IsPositiveSemidefinite',
        'IsSkewHermitian',
        'IsUnitary',
        'JordanBlock',
        'Kernel',
        'KroneckerProduct',
        'LUDecomposition',
        'Minor',
        'NonPivotColumns',
        'Norm',
        'NullSpace',
        'Nullity',
        'OrthogonalComplement',
        'PivotColumns',
        'Projection',
        'QRDecomposition',
        'RayleighQuotient',
        'RayleighQuotientIteration',
        'Rank',
        'RosserMatrix',
        'Rotation2D',
        'Rotation3DX',
        'Rotation3DY',
        'Rotation3DZ',
        'RowSpace',
        'SesquilinearForm',
        'SesquilinearFormFunction',
        'SmithNormalFormField',
        'SmithNormalFormInteger',
        'SolveLinearSystem',
        'ToeplitzMatrix',
        'Trace',
        'Transpose',
        'VandermondeMatrix',
        'VectorAngle',
        'VectorSpaceDirectSum',
        'VectorSubspaceIntersection',
        'VectorSubspaceSum',
        'Catalan',
        'Combinations',
        'DoubleFactorial',
        'Factorial',
        'FallingFactorial',
        'Fibonacci',
        'FrobeniusNumber',
        'GaloisMatrix',
        'GreedyAlgorithm',
        'HarmonicNumber',
        'Hofstadter',
        'LinearRecursiveSequence',
        'Multinomial',
        'NextCombination',
        'Pascal',
        'Permutations',
        'StirlingNumberFirst',
        'StirlingNumberSecond',
        'Subfactorial',
        'Triangular',
        'nCr',
        'nPr',
        'CompositeSimpsonsRule',
        'CompositeSimpsonsRuleTolerance',
        'Derivative',
        'EvenPeriodicExtension',
        'FourierSeriesFunction',
        'InfiniteProduct',
        'InfiniteProduct2',
        'InfiniteSum',
        'InfiniteSum2',
        'IsContinuous',
        'IsDifferentiable',
        'LeftLimit',
        'Limit',
        'MidpointRule',
        'NumericalDerivative',
        'NumericalFourierSeriesCoefficients',
        'NumericalFourierSeriesFunction',
        'NumericalFourierCosineSeriesCoefficients',
        'NumericalFourierCosineSeriesFunction',
        'NumericalFourierSineSeriesCoefficients',
        'NumericalFourierSineSeriesFunction',
        'NumericalIntegral',
        'NumericalLeftDerivative',
        'NumericalLimitAtInfinity',
        'NumericalRightDerivative',
        'OddPeriodicExtension',
        'OneSidedFivePointFormula',
        'OneSidedThreePointFormula',
        'PeriodicExtension',
        'RightLimit',
        'TwoSidedFivePointFormula',
        'TwoSidedThreePointFormula',
        'CubicFormula',
        'EulersMethod',
        'EulersMethodFull',
        'FindRootBisection',
        'FindRootFalsePosition',
        'FindRootMullersMethod',
        'FindRootSecant',
        'HalleysMethod',
        'NewtonsMethod',
        'PolynomialRoots',
        'QuadraticFormula',
        'QuarticFormula',
        'RungeKutta',
        'RungeKuttaFull',
        'AddPoly',
        'DividePoly',
        'IsPoly',
        'MultiplyPoly',
        'NewtonsMethodPoly',
        'Poly2ndDerivative',
        'PolyDerivative',
        'PolyToFunction',
        'PolyToString',
        'SubtractPoly',
        'TrimPoly',
        'Intersection',
        'IsIn',
        'IsSubset',
        'MakeSet',
        'SetMinus',
        'Union',
        'MacaulayBound',
        'MacaulayLowerOperator',
        'MacaulayRep',
        'SymbolicDerivative',
        'SymbolicDerivativeTry',
        'SymbolicNthDerivative',
        'SymbolicNthDerivativeTry',
        'SymbolicTaylorApproximationFunction',
        'ApplyOverMatrix',
        'ApplyOverMatrix2',
        'ColumnsOf',
        'ComplementSubmatrix',
        'CompoundMatrix',
        'CountZeroColumns',
        'DeleteColumn',
        'DeleteRow',
        'DiagonalOf',
        'DotProduct',
        'ExpandMatrix',
        'HermitianProduct',
        'I',
        'eye',
        'IsDiagonal',
        'IsLowerTriangular',
        'IsMatrixInteger',
        'IsMatrixPositive',
        'IsMatrixRational',
        'IsMatrixReal',
        'IsMatrixSquare',
        'IsUpperTriangular',
        'IsValueOnly',
        'IsVector',
        'IsZero',
        'LowerTriangular',
        'MakeDiagonal',
        'diag',
        'MakeVector',
        'MatrixProduct',
        'MatrixSum',
        'MatrixSumSquares',
        'NonzeroColumns',
        'NonzeroElements',
        'OuterProduct',
        'ReverseVector',
        'RowSum',
        'RowSumSquares',
        'RowsOf',
        'SetMatrixSize',
        'ShuffleVector',
        'SortVector',
        'StripZeroColumns',
        'StripZeroRows',
        'Submatrix',
        'SwapRows',
        'UpperTriangular',
        'columns',
        'elements',
        'ones',
        'rows',
        'zeros',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(#.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};
