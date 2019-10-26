export declare function eachCartesianJoinFactory<T1, U>(arrays: [(() => T1)[]], callback: (arg1: T1) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[]], callback: (arg1: T1, arg2: T2) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[]], callback: (arg1: T1, arg2: T2, arg3: T3) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, T6, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => T6)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, T6, T7, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => T6)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => T7)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, T6, T7, T8, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => T6)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => T7)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => T8)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => T6)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => T7)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => T8)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => T9)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => T6)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => T7)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => T8)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => T9)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => T10)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => T6)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => T7)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => T8)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => T9)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => T10)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => T11)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11) => U): void;
export declare function eachCartesianJoinFactory<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, U>(arrays: [(() => T1)[], ((arg1: T1) => T2)[], ((arg1: T1, arg2: T2) => T3)[], ((arg1: T1, arg2: T2, arg3: T3) => T4)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4) => T5)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => T6)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => T7)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => T8)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => T9)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => T10)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => T11)[], ((arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11) => T12)[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10, arg11: T11, arg12: T12) => U): void;
export declare function eachCartesianJoin<T1, U>(arrays: [T1[]], callback: (arg1: T1, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, U>(arrays: [T1[], T2[]], callback: (arg1: T1, arg2: T2, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, T3, U>(arrays: [T1[], T2[], T3[]], callback: (arg1: T1, arg2: T2, arg3: T3, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, T3, T4, U>(arrays: [T1[], T2[], T3[], T4[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, T3, T4, T5, U>(arrays: [T1[], T2[], T3[], T4[], T5[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, T3, T4, T5, T6, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, T3, T4, T5, T6, T7, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[], T7[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, T3, T4, T5, T6, T7, T8, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, callIndex: number) => U): void;
export declare function eachCartesianJoin<T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, callIndex: number) => U): void;
export declare function eachCartesianJoinAsync<T1, U>(arrays: [T1[]], callback: (arg1: T1, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, U>(arrays: [T1[], T2[]], callback: (arg1: T1, arg2: T2, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, T3, U>(arrays: [T1[], T2[], T3[]], callback: (arg1: T1, arg2: T2, arg3: T3, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, T3, T4, U>(arrays: [T1[], T2[], T3[], T4[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, T3, T4, T5, U>(arrays: [T1[], T2[], T3[], T4[], T5[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, T3, T4, T5, T6, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, T3, T4, T5, T6, T7, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[], T7[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, T3, T4, T5, T6, T7, T8, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, callIndex: number) => U): Promise<void>;
export declare function eachCartesianJoinAsync<T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(arrays: [T1[], T2[], T3[], T4[], T5[], T6[], T7[], T8[], T9[]], callback: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, callIndex: number) => U): Promise<void>;
//# sourceMappingURL=each-cartesian-join.d.ts.map