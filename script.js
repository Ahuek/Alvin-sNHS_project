const facts = [
    "Cardiac psychologists help patients cope with the emotional impact of heart disease.",
    "Research shows that up to 1 in 3 patients with heart disease also experience depression.",
    "Heart disease is the leading cause of death worldwide, but mental health support can improve recovery outcomes.",
    "Patients who receive psychological support before and after heart surgery tend to have faster recovery times.",
    "Cardiac psychologists use therapies like Cognitive Behavioral Therapy (CBT) to help patients manage anxiety and stress.",
    "Studies show that managing stress effectively can lower the risk of future heart problems by up to 30%.",
    "Cardiac psychologists work with patients to help them change unhealthy behaviors like smoking, which increases heart disease risk by 2-4 times.",
    "It is estimated that 50-70% of people with heart disease will experience some form of psychological distress, including anxiety or depression.",
    "Patients who participate in psychological counseling after heart surgery are more likely to stick to a heart-healthy lifestyle.",
    "People with heart disease are twice as likely to experience depression than those without heart disease.",
    "The emotional state of a patient can directly impact their recovery from heart surgery; patients with a positive mindset tend to recover faster.",
    "Nearly 25% of people with heart disease report feelings of hopelessness, which can worsen their condition if not addressed.",
    "Heart patients who engage in regular mental health care are 50% more likely to reduce their risk of another heart attack."
  ];
  function showFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factBox = document.getElementById("fact-box");
    factBox.textContent = facts[randomIndex];
  }  