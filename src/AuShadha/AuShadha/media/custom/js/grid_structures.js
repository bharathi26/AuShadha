var GRID_STRUCTURES= {
  PATIENT_GRID  : [
                  {name       : "ID", 
                  field      : "id", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Edit", 
                  field      : "edit", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Del", 
                  field      : "del", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Visit", 
                  field      : "visitadd", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Adm", 
                    field      : "admissionadd", 
                    width      : "50px",
                    hidden     : true,
                    cellStyles : "text-align:center;"
                  },

                  {name       : "Patient ID", 
                    field      : "patient_hospital_id", 
                    width      : "75px",
                    cellStyles : "text-align:center;"
                  },
                  { name      : "First Name", 
                    field     : "first_name", 
                    width      : "100px",
                    hidden      : true,
                    cellStyles : "text-align:center;"
                  },
                  { name      : "Middle Name", 
                    field     : "middle_name", 
                    width      : "100px",
                    hidden      : true,
                    cellStyles : "text-align:center;"
                  },
                  { name       : "Last Name" ,
                    field      : "last_name" , 
                    width      : "100px",
                    cellStyles : "text-align:center;",
                    hidden      : true,
                    formatter  : function(last_name){ 
                                  return '<em>'+ last_name +'</em>';
                               }
                  },
                  { name        : "Full Name", 
                    field       : "full_name", 
                    width       : "250px",
                    hidden      : false,
                    cellStyles  : "text-align:center;"
                  },
                  {name       : "Age/Sex"   ,
                    field      : "age"   ,
                    width      : "60px",
                    cellStyles : "text-align:center;",
                    formatter  : function(age,rowI){
                                  var thisRow   = this.grid.getItem(rowI);
                                  var sex       = thisRow.sex;
                                  var sex_symbol;
                                  if(sex == 'Male'){
                                   sex_symbol= '<img src="{{STATIC_URL}}images/male.png" '+
                                           'alt="Male" class="small_img">'; 
                                  }
                                  else if(sex == 'Female'){
                                   sex_symbol= '<img '+
                                          'src="{{STATIC_URL}}images/female.png"'+
                                          'title="'+ sex +
                                          '" alt="Male" class="small_img">'; 
                                  }
                                  else{
                                   sex_symbol="Others"
                                  } 
                                  var formatted_data = age +"&nbsp;&nbsp;" + sex_symbol;
                                  return formatted_data;
                                }
                  },
                  {name      : "Sex" , 
                    field     : "sex" ,
                    width      : "100px",
                    hidden    : true,
                    formatter : function(sex){
                              if(sex == 'Male'){
                               return '<img src="{{STATIC_URL}}images/male.png" '+
                                       'alt="Male" class="small_img">'; 
                              }
                              else if(sex == 'Female'){
                               return '<img '+
                                      'src="{{STATIC_URL}}images/female.png"'+
                                      'title="'+ sex +
                                      '" alt="Male" class="small_img">'; 
                              }
                              else{
                               return "Others"
                              } 
                            },
                    cellStyles: "text-align:center;"
                  },
                  { name      : "URL"   , 
                    field     : "home"  ,
                    width      : "50px",
                    hidden    : true,
                    cellStyles: "text-align:center;",
                  }],

  PATIENT_CONTACT_GRID_STRUCTURE: [
                                {name       : "ID", 
                                 field      : "id", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "PatID", 
                                 field      : "pat_id", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Edit", 
                                 field      : "edit", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Del", 
                                 field      : "del", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Type", 
                                 field      : "address_type", 
                                 width      : "50px",
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Address", 
                                 field      : "address", 
                                 width      : "250px",
                                 cellStyles : "text-align:center;",
                                 formatter  : function(address,rowI){
                                                var thisRow   = this.grid.getItem(rowI);
                                                var city_name = thisRow.city;
                                                var state     = thisRow.state;
                                                var country   = thisRow.country;
                                                var pincode   = thisRow.pincode;
                                                var formatted_data = address   +"</br>" + 
                                                                     city_name  +","  + state + "</br>"+
                                                                     country    +"-" + pincode;
                                                return formatted_data;
                                              }
                                },

                                {name       : "City", 
                                 field      : "city", 
                                 width      : "150px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "State", 
                                 field      : "state", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Country", 
                                 field      : "country", 
                                 width      : "100px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Pincode", 
                                 field      : "pincode", 
                                 width      : "100px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                }],

  PATIENT_PHONE_GRID_STRUCTURE: [
                                 {name       : "ID", 
                                   field      : "id", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Edit", 
                                   field      : "edit", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Del", 
                                   field      : "del", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Type", 
                                   field      : "phone_type", 
                                   width      : "50px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "ISD", 
                                   field      : "ISD_Code", 
                                   width      : "250px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "STD", 
                                   field      : "STD_Code", 
                                   width      : "150px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Phone", 
                                   field      : "phone", 
                                   width      : "120px",
                                   cellStyles : "text-align:center;",
                                   formatter  : function(phone, rowI){
                                                  var rowdata = this.grid.getItem(rowI);
                                                  var ISD     = rowdata.ISD_Code;
                                                  var STD     = rowdata.STD_Code;
                                                  var formatted_data = ISD + "-" + STD + "-" + phone
                                                  return formatted_data;
                                                }
                                  }],

  PATIENT_GUARDIAN_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Name", 
                                      field      : "guardian_name", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Relation", 
                                      field      : "relation_to_guardian", 
                                      width      : "60px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Phone", 
                                      field      : "guardian_phone", 
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    }],

  PATIENT_DEMOGRAPHICS_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Socioeconomics", 
                                      field      : "socioeconomics", 
                                      width      : "50px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Education", 
                                      field      : "education", 
                                      width      : "250px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Housing", 
                                      field      : "housing_conditions", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Religion", 
                                      field      : "religion", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Language", 
                                      field      : "languages_known", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Marital Status", 
                                      field      : "marital_status", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Drug Abuse", 
                                      field      : "drug_abuse_history", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Alcohol", 
                                      field      : "alcohol_intake", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Smoking", 
                                      field      : "smoking", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    } ],


  PATIENT_FAMILY_HISTORY_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Member", 
                                      field      : "family_member", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Age", 
                                      field      : "age", 
                                      width      : "40px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Deceased", 
                                      field      : "deceased", 
                                      width      : "30px",
                                      cellStyles : "text-align:center;"
                                    },
                                    
                                    {name       : "Disease", 
                                      field      : "disease", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    
                                    {name       : "Age at Onset", 
                                      field      : "age_at_onset", 
                                      width      : "40px",
                                      cellStyles : "text-align:center;"
                                    }
                                  ],

  PATIENT_MEDICATION_LIST_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Name", 
                                      field      : "medication", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Strength", 
                                      field      : "strength", 
                                      width      : "60px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Dosage", 
                                      field      : "dosage", 
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Prescription Date", 
                                      field      : "prescription_date", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Currently Active ?", 
                                      field      : "currently_active", 
                                      width      : "60px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Prescribed by", 
                                      field      : "prescribed_by", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    }

                                  ],

  PATIENT_ALLERGIES_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Allergic To", 
                                      field      : "allergic_to", 
                                      width      : "120px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Reaction Observed", 
                                      field      : "reaction_observed", 
                                      width      : "120px",
                                      cellStyles : "text-align:center;"
                                    }
                                  ],


  PATIENT_IMMUNIZATION_GRID_STRUCTURE: [
                                    {name        : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Name", 
                                      field      : "vaccine_name", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name        : "Date", 
                                      field      : "vaccination_date", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Adverse Reaction", 
                                      field      : "adverse_reaction", 
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    }
                                  ],


  PATIENT_PATIENT_MEDIA_GRID_STRUCTURE: "",

  PATIENT_ADMISSION_GRID_SRUCTURE: [
                                  {name       : "ID", 
                                    field      : "id", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Home", 
                                    field      : "home", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Edit", 
                                    field      : "edit", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Del", 
                                    field      : "del", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "DOA", 
                                    field      : "date_of_admission", 
                                    width      : "50px",
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "TOA", 
                                    field      : "time_of_admission", 
                                    width      : "50px",
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Surgeon", 
                                    field      : "admitting_surgeon", 
                                    width      : "250px",
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Status", 
                                    field      : "admission_closed", 
                                    width      : "150px",
                                    cellStyles : "text-align:center;",
                                    formatter : function(admission_closed){
                                                      if(admission_closed == true){
                                                          return '<img src="{{STATIC_URL}}images/flag_green.png" '+
                                                          'alt="Discharged" class="small_img">'; 
                                                      }
                                                      else if(admission_closed == false){
                                                          return '<img '+
                                                          'src="{{STATIC_URL}}images/flag_green.png"'+
                                                          'alt="Active" class="small_img">'; 
                                                      }
                                                      else{
                                                          return "Others"
                                                      }
                                                } 
                                  },

                                  {name       : "Room", 
                                  field      : "room_or_ward", 
                                  width      : "50px",
                                  cellStyles : "text-align:center;"
                                  },

                                  {name       : "Hospital", 
                                  field      : "hospital", 
                                  width      : "100px",
                                  cellStyles : "text-align:center;"
                                  }],

  PATIENT_VISIT_GRID_STRUCTURE: [
                                  {name       : "ID", 
                                   field      : "id", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Edit", 
                                   field      : "edit", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Del", 
                                   field      : "del", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "DOV", 
                                   field      : "visit_date", 
                                   width      : "50px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Surgeon", 
                                   field      : "op_surgeon", 
                                   width      : "250px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Nature", 
                                   field      : "consult_nature", 
                                   width      : "150px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Status", 
                                   field      : "is_active", 
                                   width      : "50px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Remarks", 
                                   field      : "remarks", 
                                   width      : "100px",
                                   cellStyles : "text-align:center;"
                                  }],
};
