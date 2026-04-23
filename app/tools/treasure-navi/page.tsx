import { pageName } from "@/public/dataBase/pageName";
import TreasureNavi from "@/components/treasureNavi/treasureNavi";

export const metadata = {
  title: `財宝ナビ${pageName}`,
  description:
    "マインクラフト統合版の埋もれた財宝の位置を特定することのできるツールです",
};

export default function TreasureNaviPage() {
  return <TreasureNavi />;
}
