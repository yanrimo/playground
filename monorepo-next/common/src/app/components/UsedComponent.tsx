// このコンポーネントは使用されるため、トランスパイルされる
console.log("UsedComponent がロードされました - これは表示されるはずです！");

export default function UsedComponent() {
    return (
        <div>
            <h1>使用されているコンポーネント</h1>
            <p>このコンポーネントは application1 からimportされています</p>
        </div>
    );
}
