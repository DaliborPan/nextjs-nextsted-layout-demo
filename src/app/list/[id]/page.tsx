const DetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="mt-10">
      <h1 className="text-xl">Route /list/[id] {params.id}</h1>
    </div>
  );
};

export default DetailPage;
