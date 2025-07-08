// このコンポーネントは使用されないため、トランスパイルされない
console.log("UnusedComponent がロードされました - これは表示されるべきではありません！");

export default function UnusedComponent() {
    return (
        <div>
            <h1>使用されていないコンポーネント</h1>
            <p>このコンポーネントは application1 からimportされていません</p>
        </div>
    );
}
