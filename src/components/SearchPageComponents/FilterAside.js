import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../common/Form/useForm';
import DatePicker from './DatePicker';
import FilterCheckBox from './FilterCheckBox';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { getListSearchingWithMeta } from './redux/Search.action';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBudgetParams,
  getProjectTypeParams,
  getTenderParams,
} from '../Procrument/redux/Procrument.action';

const FilterAside = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTenderParams());
    dispatch(getBudgetParams());
    dispatch(getProjectTypeParams());
  }, []);

  const { procrumentParams, budgetParams, projectTypeParams, loading } =
    useSelector((state) => state.procrument);

  const [procrument, setProcrument] = useState();
  const searching_params = useParams();
  const [procrumentCat, setProcrumentCat] = useState();
  const [budget, setBudget] = useState();
  const [budgetCat, setBudgetCat] = useState();
  const [projectType, setProjectType] = useState();
  const [projectTypeCat, setProjectTypeCat] = useState();

  useEffect(() => {
    if (procrumentParams) {
      setProcrument(procrumentParams);
    }
    if (budgetParams) {
      setBudget(budgetParams);
    }
    if (projectTypeParams) {
      setProjectType(projectTypeParams);
    }
  }, [procrumentParams, budgetParams, projectTypeParams]);

  const pushValueToProcrument = (tempData) => {
    let newData = tempData.filter((i) => i.isChecked).map((j) => j.id);
    return setProcrumentCat(newData);
  };

  const pushValueToBudgetCat = (tempData) => {
    let newData = tempData.filter((i) => i.isChecked).map((j) => j.id);
    return setBudgetCat(newData);
  };

  const pushValueToProjectTypeCat = (tempData) => {
    let newData = tempData.filter((i) => i.isChecked).map((j) => j.id);
    return setProjectTypeCat(newData);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'selectAll') {
      let tempData = procrument?.map((data) => ({
        ...data,
        isChecked: checked,
      }));
      setProcrument(tempData);
      pushValueToProcrument(tempData);
    } else {
      let tempData = procrument?.map((data) =>
        +value === data?.id ? { ...data, isChecked: checked } : data
      );
      console.log(procrument, +value, 'From TempData');
      setProcrument(tempData);
      pushValueToProcrument(tempData);
    }
  };
  const handleBudgetChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(e.target, 'From e target in handlebudget');
    if (name === 'selectAllBudget') {
      let tempData = budget?.map((data) => ({
        ...data,
        isChecked: checked,
      }));
      setBudget(tempData);
      pushValueToBudgetCat(tempData);
    } else {
      let tempData = budget?.map((data) =>
        +value === data?.id ? { ...data, isChecked: checked } : data
      );
      console.log(procrument, +value, 'From TempData');
      setBudget(tempData);
      pushValueToBudgetCat(tempData);
    }
  };

  const handleProjectTypeChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'selectAllProjectType') {
      let tempData = projectType?.map((data) => ({
        ...data,
        isChecked: checked,
      }));
      setProjectType(tempData);
      pushValueToProjectTypeCat(tempData);
    } else {
      let tempData = projectType?.map((data) =>
        +value === data?.id ? { ...data, isChecked: checked } : data
      );
      console.log(procrument, +value, 'From TempData');
      setProjectType(tempData);
      pushValueToProjectTypeCat(tempData);
    }
  };

  let initialValues = {
    date_from: '',
    date_to: '',
    procurement_category: procrumentCat || [],
    budget: budgetCat || [],
    project_type: projectTypeCat || [],
    searching_params: searching_params?.string || '',
  };

  const validationSchema = yup.object({});

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values, 'From Values in Filter Aside');
    dispatch(getListSearchingWithMeta(values));
    setSubmitting(false);
  };

  const { CustomDateInput, CustomCheckbox, CustomForm } = useForm({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="AsideBox">
      <div className="filter_aside_box">
        <div className="filter_title">
          <p>Filter</p>
        </div>
        <div className="divider"></div>
        <CustomForm>
          <div className="filter_input_area">
            <DatePicker CustomDateInput={CustomDateInput} />
          </div>
          <div className="divider"></div>
          <FilterCheckBox
            procrument={procrument && procrument}
            title="Procruments"
            loading={loading}
            handleChange={handleChange}
            name="procurement_category"
          />
          <div className="divider"></div>
          <FilterCheckBox
            CustomCheckbox={CustomCheckbox}
            title="Tendor Price"
            handleChange={handleBudgetChange}
            procrumentBudget={budget && budget}
            name="budget"
          />
          <FilterCheckBox
            CustomCheckbox={CustomCheckbox}
            title="Project Type"
            handleChange={handleProjectTypeChange}
            procrumentProjectType={projectType && projectType}
            name="project_type"
          />
          <Button type="submit" className="apply_filter">
            Apply Filter
          </Button>
        </CustomForm>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default FilterAside;
