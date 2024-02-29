export default function Card(props: any) {
  return (
    <div className="w-full flex flex-col items-center bg-zinc-50 shadow-md">
      <figure className="w-full">
        {props.image && (
          <img src={props.image} alt="" className="w-full h-60 object-cover" />
        )}
      </figure>
      <div className="w-4/5 my-4">
        <h3 className="text-3xl font-light text-zinc-900">{props.title}</h3>
        <p className="text-sm text-zinc-900 mt-4">{props.supporting}</p>
      </div>
      <footer className="space-x-4 py-5 w-4/5 border-t border-gray-200">
        {props.footer}
      </footer>
    </div>
  );
}
