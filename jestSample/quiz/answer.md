* toBeとtoEqualの違いは？  
  ↓  
  [toBe](https://jestjs.io/docs/ja/expect#tobevalue) はプリミティブ値の比較(
  ただし浮動小数点は[toBeCloseTo](https://jestjs.io/docs/ja/expect#tobeclosetonumber-numdigits) )に使用する。  
  [toEqual](https://jestjs.io/docs/ja/expect#toequalvalue) はオブジェクトのプロパティの比較に使用する。


* 同じようなテストを複数回したいときはどうする？(1+1→2、10+10→20、200+300→500のテストのようなテストコードが重複するような時)  
  ↓  
  [it.each](https://jestjs.io/docs/ja/api#testeachtablename-fn-timeout) を使う
