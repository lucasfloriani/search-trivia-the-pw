interface Props {
  question: string;
  answers: string[];
}

const Item = (props: Props) => {
  return (
    <li className="border-gray-400 flex flex-row mb-2">
      <div className="shadow border select-none bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium dark:text-white mb-4">
            {props.question}
          </div>
          {props.answers.map((answer) => (
            <div className="mt-1 text-sm dark:text-gray-200" key={answer}>
              {answer}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Item;
