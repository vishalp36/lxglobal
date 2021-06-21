import React, { useState } from 'react';
import { Link } from "react-router-dom";
//buttons
import Button from "../button";
//Input
import Input from "../input/text";
import InputWithClearbtn from "../input/text/with-clear-icon";
import PasswordInput from "../input/text/password-input";
import SearchInput from "../input/text/input-search";
import Textarea from '../input/text/textarea';
import DefaultSelectBox from "../input/text/select";
import CustomSelect from "../input/text/custom-select";
import DropdownList from "../input/text/dropdown-list";
import DropdownListScroll from "../input/text/dropdown-list-scroll";
import DropdownListSelected from "../input/text/dropdown-list-selected";
//radio and checkbox
import Radio from "../input/checks-radios";
import Checkbox from "../input/checks-radios/checkbox";
import Switch from "../input/checks-radios/switch";
import Img1 from "../../resources/images/1.png";
import CartIcon from "../../resources/svg-icons/cart.svg";
import CartblackIcon from "../../resources/svg-icons/cart-black.svg";
import Plus from "../../resources/svg-icons/plus.svg";
import PlusBlack from "../../resources/svg-icons/plus-black.svg";
import RightArrow from "../home/images/right-arrow.svg";
import RightArrowyellow from "../home/images/right-arrow-yellow.svg";
//phoneInput
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
//custom css
import '../../resources/css/lib/phone-input/phone-input.scss';
import inputStyle from '../input/styles.scss';
import Quantity from '../quantity-box';


export default function StyleGuide() {
	const [value, setValue] = useState()
	const button = {
		margin: "0 5% .33rem 0",
		display: "inline-block",
		verticalAlign: "top",
	};
	const box = {
		width: "32px",
		height: '32px',
	};
  return (
	<>
		<div className="container" style={{ padding: '20px' }}>
			<h1 className="h2 text-primary"><u>Style Guide:</u></h1>
			<ul style={{padding: '0', listStyle: 'none'}}>
            	<li>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Colors</h2>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem 2rem -.5rem'}}>
						<div style={{padding: '.5rem'}}>
							<div className="bg-dark" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-primary" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-danger" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-secondary" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-gray" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-gray70" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-gray20" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-gray10" style={box} />
						</div>
						<div style={{padding: '.5rem'}}>
							<div className="bg-gray50" style={box} />
						</div>
					</div>
				</li>
				<li>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Typography</h2>
					<div style={{display: 'flex', flexWrap: 'wrap'}}>
						<div style={{flex: '1 1 400px',padding: '.5rem'}}>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">H1</span>
								<h1>Lorem ipsum is a common placeholder</h1>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">H2</span>
								<h2>Lorem ipsum is a common placeholder</h2>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">H3</span>
								<h3 style={{marginBottom: '2rem'}}>Lorem ipsum is a common placeholder</h3>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">H4</span>
								<h4 style={{marginBottom: '2rem'}}>Lorem ipsum is a common placeholder</h4>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">H5</span>
								<h5 style={{marginBottom: '2rem'}}>Lorem ipsum is a common placeholder</h5>
							</div>
						</div>
						<div style={{flex: '1 1 400px',padding: '.5rem'}}>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">Title</span>
								<p className="sm-title">Lorem ipsum is a common placeholder</p>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">Text 14</span>
								<p className="text-14">Lorem ipsum is a common placeholder</p>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">Text 15</span>
								<p className="text-15">Lorem ipsum is a common placeholder</p>
								<p className="text-15-semibold">Lorem ipsum is a common placeholder</p>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<span className="h4">Text 16</span>
								<p className="text-16">Lorem ipsum is a common placeholder</p>
								<p className="text-16-semibold">Lorem ipsum is a common placeholder</p>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<p className="h4">Link 14</p>
								<Link to="/" className="link-14">Lorem ipsum is a common placeholder</Link>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<p className="h4">Link 16</p>
								<Link to="/" className="link-16">Lorem ipsum is a common placeholder</Link>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<p className="h4">Link 18</p>
								<Link to="/" className="link-18">Lorem ipsum is a common placeholder</Link>
							</div>
							<div style={{marginBottom: '2rem'}}>
								<p className="h4">Link 20</p>
								<Link to="/" className="link-20">Lorem ipsum is a common placeholder</Link>
							</div>
						</div>
					</div>
				</li>
				<li>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Buttons</h2>
					<h3 className="h4">Big</h3>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
						  	<Button className="btn-lg">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
						  	<Button className="btn-lg">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>hover / pressed</p>
						</div>
						<div style={button}>
						  	<Button className="loading btn-lg">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>Loading</p>
						</div>
						<div style={button}>
						  	<Button className="btn-lg" disabled>Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
					</div>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
						  	<Button className="btn-lg btn-secondary">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
						  	<Button className="btn-lg btn-secondary">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>hover / pressed</p>
						</div>
						<div style={button}>
						  	<Button className="btn-secondary-loader loading btn-lg btn-secondary">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>Loading</p>
						</div>
						<div style={button}>
						  	<Button className="btn-lg btn-secondary" disabled>Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
					</div>
					<h3 className="h4">Medium</h3>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
						  	<Button>Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
						  	<Button>Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>hover / pressed</p>
						</div>
						<div style={button}>
						  	<Button className="loading">Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>Loading</p>
						</div>
						<div style={button}>
						  	<Button disabled>Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
					</div>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
						  	<Button className="btn-secondary">Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
						  	<Button className="btn-secondary">Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>hover / pressed</p>
						</div>
						<div style={button}>
						  	<Button className="btn-secondary-loader loading btn-secondary">Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>Loading</p>
						</div>
						<div style={button}>
						  	<Button className="btn-secondary" disabled>Open</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
					</div>
					<h3 className="h4">btn with icon</h3>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
							<Button className="btn-icon">
								<img src={CartIcon} alt="cart" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
							<Button className="btn-icon">
								<img src={Plus} alt="Add" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
							<Button className="btn-icon btn-secondary">
								<img src={CartblackIcon} alt="cart" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
							<Button className="btn-icon btn-secondary">
								<img src={PlusBlack} alt="Add" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
							<Button className="btn-icon loading">
								<img src={CartIcon} alt="Add" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>Loading</p>
						</div>
						<div style={button}>
							<Button className="btn-icon btn-secondary loading btn-secondary-loader">
								<img src={CartblackIcon} alt="Add" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>Loading</p>
						</div>
						<div style={button}>
							<Button className="btn-icon" disabled>
								<img src={CartIcon} alt="cart" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
					</div>
					<h3 className="h4">btn small and xs with icon</h3>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
							<Button className="btn-icon btn-sm-icon">
								<img src={Plus} alt="cart" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>small</p>
						</div>
						<div style={button}>
							<Button className="btn-icon btn-xs-icon">
								<img src={CartIcon} alt="cart" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>xs</p>
						</div>
					</div>
					<h3 className="h4">Text</h3>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
						  	<Button className="btn-link">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
							<Button className="btn-link">Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>hover / pressed</p>
						</div>
						<div style={button}>
							<Button className="btn-link" disabled>Button</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
						<div style={button}>
							<Button className="btn-link btn-link-right-icon">
                                Button
                                <img src={RightArrow} alt="RightArrow" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
							<Button className="btn-link btn-link-secondary btn-link-right-icon">
                                Button
                                <img src={RightArrowyellow} alt="RightArrow" />
							</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
					</div>
					<h3 className="h4">Link</h3>
					<div style={{ margin: '20px auto' }}>
						<div style={button}>
						  	<Button element="a" href="/" className="btn-link-underline btn-link">Link</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={button}>
							<Button element="a" href="/" className="btn-link-underline btn-link">Link</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>hover / pressed</p>
						</div>
						<div style={button}>
						   <Button element="a" href="/" className="btn-link-underline btn-link btn-disabled" disabled>Link</Button>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
					</div>
				</li>
				<li>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Inputs</h2>
					<div style={{display: 'flex', flexWrap: 'wrap'}}>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Input type="text" placeholdertext="Where are you?" />
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Input type="text" placeholdertext="Where are you?" />
							<p className="p2" style={{ padding: '.5rem 0'}}>hover</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Input type="text" placeholdertext="Where are you?" disabled />
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<InputWithClearbtn 
								type="text"
								className="has-right-icon" 
								placeholdertext="Where are you?" 
								autoFocus 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>active1</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Input type="text" placeholdertext="Where are you?" />
							<p className="p2" style={{ padding: '.5rem 0'}}>active2</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<PasswordInput 
								type="password" 
								className="input-password has-right-icon has-right-icon-visible" 
								placeholdertext="Enter password" 
								defaultValuetext="0123456789"
								disabled
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>password 1 (disabled)</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<InputWithClearbtn 
								type="text"
								className="has-right-icon" 
								placeholdertext="Where are you?" 
								defaultValuetext="Typing"
								autoFocus 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>typing 1</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Input 
								type="text" 
								placeholdertext="Where are you?" 
								defaultValuetext="Typing" 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>typing 2</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<PasswordInput 
								type="password" 
								className="input-password has-right-icon has-right-icon-visible" 
								placeholdertext="Enter password" 
								defaultValuetext="0123456789"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>password 2</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Input 
								type="text" 
								placeholdertext="Where are you?" 
								defaultValuetext="Filled" 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>filled</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Input 
								type="email" 
								placeholdertext="Where are you?" 
								defaultValuetext="Filled" 
							>
								<span className="error-text">Error message</span>
							</Input>
							<p className="p2" style={{ padding: '.5rem 0'}}>error</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<PasswordInput 
								type="text" 
								className="input-password has-right-icon has-right-icon-visible" 
								placeholdertext="Enter password" 
								iconclassName="active"
								defaultValuetext="0123456789"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>password show</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<SearchInput 
								type="search" 
								placeholdertext="Search for products, brands, stores..."
								className="input-search has-left-icon has-right-icon" 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Search active 1</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<SearchInput 
								type="search" 
								placeholdertext="Search for products, brands, stores..."
								className="input-search has-left-icon"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Search active 2</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<SearchInput 
								type="search" 
								placeholdertext="Search for products, brands, stores..."
								className="input-search has-left-icon has-right-icon" 
								defaultValuetext="Typing"
								autoFocus
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Search typing</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<SearchInput 
								type="search" 
								placeholdertext="Search for products, brands, stores..."
								className="transparent-input input-search has-left-icon has-right-icon" 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Search active 1</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<SearchInput 
								type="search" 
								placeholdertext="Search for products, brands, stores..."
								className="transparent-input input-search has-left-icon"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Search active 2</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<SearchInput 
								type="search" 
								placeholdertext="Search for products, brands, stores..."
								className="transparent-input input-search has-left-icon has-right-icon" 
								defaultValuetext="Typing"
								autoFocus
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Search typing</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<PhoneInput
								className="custom-phone-input"
								international
								placeholder="000 000 000"
								defaultCountry="NL"
								value={value}
								onChange={setValue}
								
                    		/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Phone number</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<Textarea
								placeholdertext="Description"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Textarea</p>
						</div>
					</div>
				</li>
				<li>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Selects</h2>
					<div style={{display: 'flex', flexWrap: 'wrap'}}>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<CustomSelect 
								placeholdertext = "Select option"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<CustomSelect 
								placeholdertext = "Select option"
								boxclassName="active"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>default</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<CustomSelect 
								placeholdertext = "Select option"
								boxclassName="disabled"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem',minHeight:'450px'}}>
							<p className="p2" style={{ padding: '.5rem 0'}}>active</p>
							<CustomSelect 
								placeholdertext = "Select option"
								dropdownclassName="active"
							>
								<DropdownList  />
							</CustomSelect>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem',minHeight:'450px'}}>
							<p className="p2" style={{ padding: '.5rem 0'}}>scroll</p>
							<CustomSelect 
								placeholdertext = "Select option"
								dropdownclassName="active"
							>
								<DropdownListScroll  />
							</CustomSelect>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<p className="p2" style={{ padding: '.5rem 0'}}>chosen</p>
							<CustomSelect 
								placeholdertext = "Select option"
								boxclassName="selected"
							/>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<DropdownListSelected>
								<span className={`${inputStyle.list}`}>
									<span className={`${inputStyle['list-img']}`}>
										<img src={Img1} alt="Product" />
									</span>
									<span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
										lorem ipsum is common place text used to demonstrate the graph
										lorem ipsum is common 
									</span>
								</span>
							</DropdownListSelected>
							<p className="p2" style={{ padding: '.5rem 0'}}>chosen option</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<DropdownListSelected>
								<span className={`${inputStyle.list}`}>
									<span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
										Lorem ipsum is common placeholder
									</span>
								</span>
							</DropdownListSelected>
							<p className="p2" style={{ padding: '.5rem 0'}}>chosen option2</p>
						</div>
						<div style={{flex: '1 1 353px',padding: '.5rem'}}>
							<DefaultSelectBox />
							<p className="p2" style={{ padding: '.5rem 0'}}>default select option</p>
						</div>
					</div>
				</li>
				<li style={{marginBottom: '2rem', display:'block'}}>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Radio button</h2>
					<div style={{display: 'flex', flexWrap: 'wrap'}}>
						<div style={{flex: '1'}}>
							<Radio type="radio" id="1" name="radio">
								<span className={`${inputStyle['multi-line-ellipsis']}`}>
									lorem ipsum is common placeholder
								</span>
							</Radio>
						</div>
						<div style={{flex: '1'}}>
							<Radio type="radio" id="2" name="radio">
								<span className={`${inputStyle.list} ${inputStyle['no-pad-hover']}`}>
									<span className={`${inputStyle['list-img']}`}>
										<img src={Img1} alt="Product" />
									</span>
									<span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
										lorem ipsum is common placeholder text used to demonstrate the graph
										lorem ipsum is common 
									</span>
								</span>
							</Radio>
						</div>
						<div style={{flex: '1'}}>
							<Radio type="radio" id="3" name="radio" disabled>
								<span className={`${inputStyle['multi-line-ellipsis']}`}>
									lorem ipsum is common placeholder
								</span>
							</Radio>
						</div>
					</div>
				</li>
				<li style={{marginBottom: '2rem', display:'block'}}>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Checkbox</h2>
					<div style={{display: 'flex', flexWrap: 'wrap'}}>
						<div style={{flex: '1'}}>
							<Checkbox className="flex-start" type="checkbox" id="4" name="checkbox">
								<span>
									lorem ipsum is common placeholder text used to demonstrate the graph
									lorem ipsum is common 
								</span>
							</Checkbox>
						</div>
						<div style={{flex: '1'}}>
							<Checkbox type="checkbox" id="5" name="checkbox">
								<span className={`${inputStyle.list} ${inputStyle['no-pad-hover']}`}>
									<span className={`${inputStyle['list-img']}`}>
										<img src={Img1} alt="Product" />
									</span>
									<span className={`${inputStyle['list-text']} ${inputStyle['multi-line-ellipsis']}`}>
										lorem ipsum is common placeholder text used to demonstrate the graph
										lorem ipsum is common 
									</span>
								</span>
							</Checkbox>
						</div>
						<div style={{flex: '1'}}>
							<Checkbox type="checkbox" id="6" name="checkbox" disabled checked>
								<span>
									lorem ipsum is common placeholder
								</span>
							</Checkbox>
						</div>
					</div>
				</li>
				<li style={{marginBottom: '2rem', display:'block'}}>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Switch</h2>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem'}}>
						<div style={{padding: '.5rem'}}>
							<Switch type="checkbox" id="7" name="checkbox" />
							<p className="p2" style={{ padding: '.5rem 0'}}>Switch toggle black</p>
						</div>
						<div style={{padding: '.5rem'}}>
							<Switch className="switch-primary" type="checkbox" id="8" name="checkbox" />
							<p className="p2" style={{ padding: '.5rem 0'}}>Switch toggle primary</p>
						</div>
					</div>
				</li>
				<li style={{marginBottom: '2rem', display:'block'}}>
					<h2 className="h3" style={{marginBottom: '2rem'}}>Product buttons</h2>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem', alignItems: 'flex-end'}}>
						<div style={{padding: '1rem'}}>
							<Quantity 
								value="1" 
								btnclassName="btn-sm-icon" 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Quantity small</p>
						</div>
						<div style={{padding: '1rem'}}>
							<Quantity 
								value="1" 
								btnclassName="btn-xs-icon" 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Quantity xs</p>
						</div>
						<div style={{padding: '1rem'}}>
							<Quantity 
								value="1" 
								btnclassName="btn-lg-icon" 
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Quantity lg</p>
						</div>
						<div style={{padding: '1rem'}}>
							<Quantity 
								value="1" 
								btnclassName="btn-lg-icon" 
								AddBtnclassName="btn-quantity-plus-icon" 
								className="quantity-box-lg"
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>Quantity with different button width</p>
						</div>
					</div>
					<div style={{display: 'flex', flexWrap: 'wrap', margin: '0 -.5rem', alignItems: 'flex-end'}}>
						<div style={{padding: '1rem'}}>
							<Quantity 
								value="0" 
								btnclassName="btn-lg-icon" 
								AddBtnclassName="btn-quantity-plus-icon" 
								className="quantity-box-lg"
								SubBtnclassName="minus-disable"
								disabled
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled -</p>
						</div>
						<div style={{padding: '1rem'}}>
							<Quantity 
								value="20" 
								btnclassName="btn-lg-icon" 
								AddBtnclassName="btn-quantity-plus-icon" 
								className="quantity-box-lg"
								plusdisabled
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled +</p>
						</div>
						<div style={{padding: '1rem'}}>
							<Quantity 
								value="0" 
								btnclassName="btn-lg-icon both-disable" 
								AddBtnclassName="btn-quantity-plus-icon" 
								className="quantity-box-lg disable-value"
								plusdisabled
								disabled
							/>
							<p className="p2" style={{ padding: '.5rem 0'}}>disabled both</p>
						</div>
					</div>
				</li>
			</ul>
			<div style={{minHeight: '100px'}} />
		</div>
	</>
	);
}
