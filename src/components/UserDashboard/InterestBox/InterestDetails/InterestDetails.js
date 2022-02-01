import React, { useEffect, useState } from 'react';
import { NavItem, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProcrumentInterest from '../InterestStepper/ProcrumentInterest';
import {
  fetchAllProcrumentInterest,
  fetchAllUserInterest,
  userInterest,
} from '../redux/Interest.actions';
import * as yup from 'yup';
import '../styles/Interest.scss';
import { useForm } from '../../../common/Form/useForm';

const InterestDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProcrumentInterest());
    dispatch(fetchAllUserInterest());
  }, []);
  const { isLoading, data, budgets, procurementCategories, projectTypes } =
    useSelector((state) => state.interest);
  const findCheckedParams = (newData, nwdata, name) => {
    let ans = nwdata?.filter((o1) => newData?.some((o2) => o1.id === o2.id));
    let unMatched = newData?.filter(
      (o1) => !nwdata?.some((o2) => o1.id === o2.id)
    );

    if (ans) {
      let newObj = ans.map((item) => ({ ...item, isChecked: true }));
      if (name === 'budget') {
        setBudgetPrams([...new Set([...unMatched, ...newObj])]);
      }
      if (name === 'cat') {
        setProcurementCategoriesParams([...new Set([...unMatched, ...newObj])]);
      }
      if (name === 'project') {
        setProjectTypesParams([...new Set([...unMatched, ...newObj])]);
      }
    }
  };

  const [step, setStep] = useState(1);
  const [budgetPrams, setBudgetPrams] = useState([]);
  const [procurementCategoriesParams, setProcurementCategoriesParams] =
    useState([]);
  const [projectTypesParams, setProjectTypesParams] = useState([]);
  useEffect(() => {
    if (
      budgets.length > 0 &&
      procurementCategories.length > 0 &&
      projectTypes.length > 0
    ) {
      if (budgets) {
        setBudgetPrams(budgets);
      }
      if (procurementCategories) {
        setProcurementCategoriesParams(procurementCategories);
      }
      if (projectTypes) {
        setProjectTypesParams(projectTypes);
      }
    }
    if (data?.budgets) {
      findCheckedParams(budgets, data?.budgets, 'budget');
    }
    if (data?.procurementCategories) {
      findCheckedParams(
        procurementCategories,
        data?.procurementCategories,
        'cat'
      );
    }
    if (data?.projectTypes) {
      findCheckedParams(projectTypes, data?.projectTypes, 'project');
    }
  }, [budgets, data, procurementCategories, projectTypes]);

  const handleNextFrom = () => {
    setStep((step) => step + 1);
  };

  const handlePrevFrom = () => {
    setStep((step) => step - 1);
  };

  const [procrumentCategory, setProcrumentCategory] = useState();
  const [procrumentBudget, setProcrumentBudget] = useState();
  const [procrumentProject, setProcrumentProject] = useState();

  const handleChangeInterest = (e) => {
    const { id, name, step, checked } = e.target;
    if (step === 'first') {
      if (name === 'selectAll') {
        let tempData =
          procurementCategoriesParams &&
          procurementCategoriesParams.map((item) => ({
            ...item,
            isChecked: checked,
          }));
        setProcurementCategoriesParams(tempData);
        setProcrumentCategory(
          tempData &&
            tempData.filter((i) => i && i.isChecked).map((j) => j && j.id)
        );
      } else {
        let tempData =
          procurementCategoriesParams &&
          procurementCategoriesParams.map((item) =>
            item?.id === +id ? { ...item, isChecked: checked } : item
          );
        setProcurementCategoriesParams(tempData);
        setProcrumentCategory(
          tempData &&
            tempData.filter((i) => i && i.isChecked).map((j) => j && j.id)
        );
      }
    }
    if (step === 'second') {
      if (name === 'selectAll') {
        let tempData =
          budgetPrams &&
          budgetPrams.map((item) => ({
            ...item,
            isChecked: checked,
          }));
        setBudgetPrams(tempData);
        setProcrumentBudget(
          tempData &&
            tempData.filter((i) => i && i.isChecked).map((j) => j && j.id)
        );
      } else {
        let tempData =
          budgetPrams &&
          budgetPrams.map((item) =>
            item?.id === +id ? { ...item, isChecked: checked } : item
          );
        setBudgetPrams(tempData);
        setProcrumentBudget(
          tempData &&
            tempData.filter((i) => i && i.isChecked).map((j) => j && j.id)
        );
      }
    }
    if (step === 'third') {
      if (name === 'selectAll') {
        let tempData =
          projectTypesParams &&
          projectTypesParams.map((item) => ({
            ...item,
            isChecked: checked,
          }));
        setProjectTypesParams(tempData);
        setProcrumentProject(
          tempData &&
            tempData.filter((i) => i && i.isChecked).map((j) => j && j.id)
        );
      } else {
        let tempData =
          projectTypesParams &&
          projectTypesParams.map((item) =>
            item?.id === +id ? { ...item, isChecked: checked } : item
          );
        setProjectTypesParams(tempData);
        setProcrumentProject(
          tempData &&
            tempData.filter((i) => i && i.isChecked).map((j) => j && j.id)
        );
      }
    }
  };

  const procrumentByStem = ({ onSubmit }) => {
    switch (step) {
      case 1:
        return (
          <ProcrumentInterest
            step="first"
            handleChange={handleChangeInterest}
            handleNext={handleNextFrom}
            handlePrev={handlePrevFrom}
            data={procurementCategoriesParams}
          />
        );

      case 2:
        return (
          <ProcrumentInterest
            step="second"
            handleChange={handleChangeInterest}
            handleNext={handleNextFrom}
            handlePrev={handlePrevFrom}
            data={budgetPrams}
          />
        );

      case 3:
        return (
          <ProcrumentInterest
            step="third"
            handleChange={handleChangeInterest}
            handleNext={handleNextFrom}
            handlePrev={handlePrevFrom}
            data={projectTypesParams}
            handleSubmit={onSubmit}
          />
        );

      default:
        return <></>;
    }
  };

  const state = useSelector((state) => state.state);

  let initialValues = {
    budget: procrumentBudget || [],
    project: procrumentProject || [],
    procurement_category: procrumentCategory || [],
  };

  const validationSchema = yup.object({});

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(userInterest(values));
    setSubmitting(false);
  };

  const { CustomForm } = useForm({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="interest_details_box">
      <div className="interest_title">
        <h4>Edit Interest</h4>
      </div>
      {isLoading ? (
        <Spinner className="text-center" animation="border" />
      ) : (
        <CustomForm>{procrumentByStem(onSubmit)}</CustomForm>
      )}
    </div>
  );
};

export default InterestDetails;
