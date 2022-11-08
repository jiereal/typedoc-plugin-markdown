import { ReflectionKind } from 'typedoc';

const PLURALS = {
  [ReflectionKind.Class]: '类',
  [ReflectionKind.Property]: '属性',
  [ReflectionKind.Enum]: '枚举常量',
  [ReflectionKind.EnumMember]: '枚举常量',
  [ReflectionKind.TypeAlias]: '类型别称',
};

export function getKindPlural(kind: ReflectionKind): string {
  if (kind in PLURALS) {
    return PLURALS[kind as keyof typeof PLURALS];
  } else {
    return getKindString(kind) + 's';
  }
}

function getKindString(kind: ReflectionKind): string {
  let str = ReflectionKind[kind];
  str = str.replace(/(.)([A-Z])/g, (_m, a, b) => a + ' ' + b.toLowerCase());
  return str;
}
