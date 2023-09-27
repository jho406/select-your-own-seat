import React from "react"
import SVG from "react-inlinesvg"
import uncheckedSvg from "../../assets/images/icons/circle.svg"
import checkedSvg from "../../assets/images/icons/check-circle.svg"
import { Form, FormProps } from "./"
import { RadioButtonFieldWithLabel } from "@thoughtbot/candy_wrapper"

export type SeatFilterProps = FormProps<{
  maximum500: RadioButtonFieldWithLabel
  maximum1000: RadioButtonFieldWithLabel
  maximum1500: RadioButtonFieldWithLabel
}>

const MaxRadioButton = (props: RadioButtonFieldWithLabel) => {
  const { label, ...rest } = props;

  return (
    <>
      <input {...rest} className="syos-tile-controls__input" />
      <label className="syos-tile-controls__control" htmlFor={rest.id}>
        <SVG
          src={uncheckedSvg}
          className="syos-icon syos-tile-controls__icon syos-tile-controls__icon--unselected"
          aria-hidden={true}
        />
        <SVG
          src={checkedSvg}
          className="syos-icon syos-tile-controls__icon syos-tile-controls__icon--selected"
          aria-hidden={true}
        />
        {label}
      </label>
    </>
  );
};

export const SeatFilter = (props: { filterForm: SeatFilterProps }) => {
  const { filterForm } = props;
  const { form, inputs, extras } = filterForm;

  const controlElements = Object.values(inputs).map((inputProps) => (
    <MaxRadioButton {...inputProps} />
  ));

  return (
    <Form {...form} extras={extras}>
      <fieldset className="syos-u-margin-bottom-6">
        <legend className="syos-u-margin-bottom-2 syos-inline-stack">
          <h2 className="syos-inline-stack__item">Filter by max price</h2>

          <input
            className="syos-button syos-button--transparent"
            type="reset"
            value="Clear Filters"
          />
        </legend>

        <div className="syos-tile-controls">{controlElements}</div>

        <input
          type="submit"
          className="syos-button syos-u-margin-top-2"
          value="Apply Filters"
        />
      </fieldset>
    </Form>
  )
}
