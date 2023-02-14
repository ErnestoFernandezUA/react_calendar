import {
  ChangeEvent,
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { handleClickOutside } from '../../helpers/handleClickOutside';
// import { POPUP } from '../constants/POPUP';
import {
// switchPopup,
} from '../../store/features/Controls/controlsSlice';
import { selectCurrentDate } from '../../store/features/Interval/intervalSlice';
import {
  // useAppDispatch,
  useAppSelector,
} from '../../store/hooks';
import { DatePicker } from '../DatePicker/DatePicker';
import { TimePicker } from '../TimePicker/TimePicker';
// import { DatePicker } from './DatePicker';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 100;
  background-color: white;
  opacity: 1;
  width: 500px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Form = styled.form`
`;

const FormItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  & label {
    width: 150px;
    text-align: right;
    padding-right: 10px;
    box-sizing: border-box;
  }
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

type FormDataKeys = 'title' | 'description' | 'date' | 'time';
type FormData = { [key in FormDataKeys]: string };
const FORM_DATA = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  DATE: 'date',
  TIME: 'time',
};

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

  const formRef = useRef<HTMLDivElement>(null);
  const currentDate = useAppSelector(selectCurrentDate);
  const [isShowDatePickerContainer, setIsShowDatePickerContainer]
  = useState<boolean>(false);
  const [isShowTimePickerContainer, setIsShowTimePickerContainer]
  = useState<boolean>(false);

  useEffect(() => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Form onSubmit');
  };

  const onChangeDate = (newDate: number) => {
    // eslint-disable-next-line no-console
    // console.log('onChangeDate');

    setValue({
      ...value,
      [FORM_DATA.DATE]: String(newDate),
    });

    setIsShowDatePickerContainer(false);
  };

  const onChangeTime = (newTime: number) => {
    // eslint-disable-next-line no-console
    console.log('onChangeTime');

    setValue({
      ...value,
      [FORM_DATA.TIME]: String(newTime),
    });

    setIsShowDatePickerContainer(false);
  };

  const onShowDatePickerHandler = () => {
    setIsShowDatePickerContainer(!isShowDatePickerContainer);
  };

  const onShowTimePickerHandler = () => {
    setIsShowTimePickerContainer(!isShowTimePickerContainer);
  };

  return (
    <Wrapper ref={formRef}>
      <Form onSubmit={handleSubmit}>
        {Object.keys(value).map(key => (
          <FormItem key={key}>
            <label htmlFor={key}>
              {key}
              :&nbsp;
            </label>

            {key === FORM_DATA.DATE && (
              <>
                {new Date(+value.date || currentDate).toDateString()}

                <DatePicker
                  currentDate={currentDate}
                  onChangeDate={onChangeDate}
                  isShowDatePickerContainer={isShowDatePickerContainer}
                  onShowDatePickerHandler={onShowDatePickerHandler}
                />
              </>
            )}

            {key === FORM_DATA.TIME && (
              <>
                {new Date(+value.date || currentDate).toDateString()}

                <TimePicker
                  currentTime={currentDate}
                  onChangeTime={onChangeTime}
                  isShowTimePickerContainer={isShowTimePickerContainer}
                  onShowTimePickerHandler={onShowTimePickerHandler}
                />
              </>
            )}

            {(key !== FORM_DATA.DATE && key !== FORM_DATA.TIME) && (
              <input
                id={key}
                type="text"
                name={key}
                value={value[key as keyof FormData]}
                onChange={onChange}
                placeholder={`input ${key}`}
              />
            )}
          </FormItem>
        ))}

        <button
          type="submit"
        >
          Submit
        </button>

      </Form>
    </Wrapper>
  );
};
