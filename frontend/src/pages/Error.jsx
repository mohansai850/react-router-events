import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function Error() {
  return (
    <>
      <MainNavigation />
      <PageContent title="An error occured">
        <p>Something went wrong!</p>
      </PageContent>
    </>
  );
}
