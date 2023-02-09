import { ChangeEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

export const Form: FunctionComponent = () => {
  const [value, setValue] = useState<any>({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      Add new item

      <form onSubmit={onSubmit}>
        {Object.keys(value).map(key => (
          <div key={key} className="PageForm1__input-container">
            <label htmlFor={key}>
              {key}
              :&nbsp;
              <input
                id={key}
                type="text"
                name={key}
                // value={value[key as keyof FormObject<Keys, string>]}
                onChange={onChange}
                placeholder={`input ${key}`}
              />

              {/* {showFails[key as keyof FormObject<Keys, string>]
                && (
                  <ul key={key}>
                    {fails[key as keyof FormObject<Keys, string[]>]!
                      .map((e: string) => (<li key={e}>{e}</li>))}
                  </ul>
                )} */}
            </label>
          </div>
        ))}

        <button
          type="submit"
          onClick={onSubmit}
          className="PageForm1__input-submit"
          // disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
