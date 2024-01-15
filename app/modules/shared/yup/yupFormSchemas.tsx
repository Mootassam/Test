import * as yup from 'yup';
const yupFormSchemas = {
  string(label: string, config: {required?: any; min?: any; max?: any}) {
    config = config || {};
    let yupChain = yup.string().nullable().trim().label(label);
    if (config.required) {
      yupChain = yupChain.required();
    }
    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }
    if (config.max || config.max === 0) {
      yupChain = yupChain.max(config.max);
    }

    return yupChain;
  },
  decimalRange(label: string) {
    return yup
      .array()
      .ensure()
      .compact()
      .of(
        yup
          .number()
          .transform((cv, ov) => {
            return ov === '' ? null : cv;
          })
          .nullable()
          .label(label),
      )
      .label(label);
  },
  enumerator(label: string) {
    return yup
      .string()
      .transform((cv, ov) => {
        return ov === '' ? null : cv;
      })
      .label(label)
      .nullable();
  },
};
export default yupFormSchemas;
