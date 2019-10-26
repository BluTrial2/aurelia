import { BindingType, IForOfStatement, IInterpolationExpression, IsBindingBehavior } from '@aurelia/runtime';
export declare function parseExpression<TType extends BindingType = BindingType.BindCommand>(input: string, bindingType?: TType): TType extends BindingType.Interpolation ? IInterpolationExpression : TType extends BindingType.ForCommand ? IForOfStatement : IsBindingBehavior;
//# sourceMappingURL=expression-parser.d.ts.map