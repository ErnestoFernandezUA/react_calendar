import {
  ChangeEvent,
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { handleClickOutside } from '../helpers/handleClickOutside';
// import { POPUP } from '../constants/POPUP';
import {
// switchPopup,
} from '../store/features/Controls/controlsSlice';
import { selectCurrentDate } from '../store/features/Interval/intervalSlice';
import {
  // useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import { DatePicker } from './DatePicker';
// import { DatePicker } from './DatePicker';

const Wrapper = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 100;
  background-color: white;
  opacity: 1;
  width: 400px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

// interface HOCDatePickerProps {
//   currentDate: number;
//   onChangeDate: (value: number) => void;
// }

// const HOCDatePicker: FunctionComponent<HOCDatePickerProps> = ({
//   currentDate,
//   onChangeDate,
// }) => {
//   const [isShowDatePicker, setIsShowDatePicker] = useState(false);
//   const onShowHandlerDatePicker = () => setIsShowDatePicker(!isShowDatePicker);

//   return (
//     <DatePicker
//       currentDate={currentDate}
//       onChangeDate={onChangeDate}
//       isShowDatePickerContainer={isShowDatePicker}
//       onShowDatePickerHandler={onShowHandlerDatePicker}
//     />
//   );
// };

type FormData = { [key: string]: string };

interface FormBodyProps {
  buttonRef: RefObject<HTMLButtonElement>;
  onShowFormHandler: () => void;
}

export const FormContainer: FunctionComponent<FormBodyProps>
= ({ buttonRef, onShowFormHandler }) => {
  // const dispatch = useAppDispatch();
  const [value, setValue] = useState<FormData>({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  // eslint-disable-next-line no-console
  console.log(buttonRef);
  const formRef = useRef<HTMLFormElement>(null);
  const currentDate = useAppSelector(selectCurrentDate);
  const [isShowDatePickerContainer, setIsShowDatePickerContainer]
  = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect mount clicker DP');

    document.addEventListener('click', (event) => handleClickOutside(
      event, buttonRef, formRef, onShowFormHandler,
    ));

    return () => {
      document.removeEventListener('click', (event) => handleClickOutside(
        event, buttonRef, formRef, onShowFormHandler,
      ));
    };
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Form onSubmit');
  };

  const onChangeDate = (newDate: number) => {
    // eslint-disable-next-line no-console
    console.log('onChangeDate');

    setValue({
      ...value,
      date: String(newDate),
    });
  };

  const onShowDatePickerHandler = () => {
    setIsShowDatePickerContainer(!isShowDatePickerContainer);
  };

  // eslint-disable-next-line no-console
  console.log('render Form.Container');

  return (
    <Wrapper ref={formRef}>
      <DatePicker
        currentDate={currentDate}
        onChangeDate={onChangeDate}
        isShowDatePickerContainer={isShowDatePickerContainer}
        onShowDatePickerHandler={onShowDatePickerHandler}
      />

      <div>
        {Object.keys(value).map(key => (
          <div key={key}>
            <label htmlFor={key}>
              {key}
              :&nbsp;

              {key === 'date' ? (
                <>
                  {new Date(+value.date || currentDate).toDateString()}

                  {/* <HOCDatePicker
                    currentDate={currentDate}
                    onChangeDate={onChangeDate}
                  /> */}
                </>
              ) : (
                <input
                  id={key}
                  type="text"
                  name={key}
                  value={value[key as keyof FormData]}
                  onChange={onChange}
                  placeholder={`input ${key}`}
                />
              )}
            </label>
          </div>
        ))}

        <button
          type="submit"
          onClick={onSubmit}
          // disabled={isLoading}
        >
          Submit
        </button>

      </div>
    </Wrapper>
  );
};
